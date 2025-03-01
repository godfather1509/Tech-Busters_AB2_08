from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

class RegisterUser(ModelSerializer):
    email = serializers.EmailField(required=True)
    phone_no=serializers.CharField(required=True)
    name=serializers.CharField(required=True)
    class Meta:
        model =User
        fields=['name','phone_no','email','password']
        extra_kwargs = {'password': {'write_only': True}}
    def validate(self, data):
            if data['email']:
                if User.objects.filter(email=data['email']).exists():
                    raise serializers.ValidationError('email is taken')
                data['username']=data['name']
            return data
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']  
        )
        return user 
    
class LoginSerializer(serializers.Serializer):
    email=serializers.EmailField()
    password=serializers.CharField()