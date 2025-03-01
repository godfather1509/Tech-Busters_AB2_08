from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from .serializer import RegisterUser, LoginSerializer

# Create your views here.


class Register(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterUser


class Login(APIView):

    def post(self, request):
        data = request.data
        if not data:
            return Response({"message": "Invalid Credentials", "data": {}})
        serializer = LoginSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            password = serializer.data["password"]
            try:
                email_id = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response({"message": "Invalid Credentials", "data": {}})

            user = authenticate(username=email_id.username, password=password)
            if user is None:
                return Response({"message": "Invalid Credentials", "data": {}})

            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                }
            )
