from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ModelViewSet
from .serializer import RegisterUser, LoginSerializer
from .models import CustomUser

# Create your views here.


class Register(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterUser


class Login(APIView):

    def post(self, request):
        data = request.data
        serializer = LoginSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            password = serializer.data["password"]
            user = authenticate(email=email, password=password)
            # since we are overiding user model with customUser model, setting username field as none and making email as unique 
            # we can use authentic function to verify details
            if user is None:
                return Response({"message": "Invalid Credentials", "data": {}})

            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                }
            )
        return Response({'data':serializer.errors})
        