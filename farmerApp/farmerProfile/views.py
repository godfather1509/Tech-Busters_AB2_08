from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ModelViewSet
from .serializer import Product_Serializer
from .models import Product_listing

# Create your views here.
class ProductList(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset=Product_listing.objects.all()
    serializer_class=Product_Serializer
