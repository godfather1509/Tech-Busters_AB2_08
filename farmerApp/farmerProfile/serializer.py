from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Product_listing

class Product_Serializer(ModelSerializer):
    class Meta:
        model = Product_listing
        fields = "__all__"
