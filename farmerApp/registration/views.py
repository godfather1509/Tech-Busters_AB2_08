from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ModelViewSet
from .serializer import RegisterUser, LoginSerializer
from .models import CustomUser,Register
from .forms import RegistrationForm

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
        

def register(request):
    roles = Register.ROLE
    if request.method=='POST':
        form=RegistrationForm(request.POST) # initializes the form with the data from the POST request.
        # here 'form' variable holds the data sent by the user
        if form.is_valid():
            register_user = form.save() 
    else:
        form=RegistrationForm() # initializes an empty form to display for non-POST requests.

    return render(request,'contact.html',{'form':form,'roles':roles})