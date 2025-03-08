from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from farmerProfile.models import Product_listing
from .models import Order

class Search_Product(ModelSerializer):
     class Meta:
        model=Product_listing
        fields='__all__'

class OrderSerializer(ModelSerializer):
    class Meta:
        model=Order
        fields=['product_name','total_amount','quantity','unit']