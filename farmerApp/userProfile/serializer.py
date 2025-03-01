from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from .models import BuyerProfile

class RegisterUser(ModelSerializer):
    email = serializers.EmailField(required=True)
    phone_no=serializers.CharField(write_only=True,required=True)
    first_name=serializers.CharField(required=True)
    address=serializers.CharField(write_only=True,required=True)
    zip_code=serializers.CharField(write_only=True,required=True)
    class Meta:
        model =User
        fields=['phone_no','first_name','email','password','address','zip_code']
        extra_kwargs = {'password': {'write_only': True}}
    def validate(self, data):
            if User.objects.filter(username=data['phone_no']).exists():
                raise serializers.ValidationError({'phone_no': 'This phone number is already registered.'})
            if data['email']:
                if User.objects.filter(email=data['email']).exists():
                    raise serializers.ValidationError('email is taken')
            return data
    def create(self, validated_data):
        phone_no=validated_data.pop('phone_no')
        address=validated_data.pop('address')
        zip_code=validated_data.pop('zip_code')
        user = User.objects.create_user(
            username=validated_data['email'],
            first_name=validated_data['first_name'],
            email=validated_data['email'],
            password=validated_data['password']  
        )
        BuyerProfile.objects.create(user=user,phone_no=phone_no,address=address,zip_code=zip_code)
        return user 
    
class LoginSerializer(serializers.Serializer):
    email=serializers.EmailField()
    password=serializers.CharField()