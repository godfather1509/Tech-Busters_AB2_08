from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import CustomUser


class RegisterUser(ModelSerializer):
    email = serializers.EmailField(required=True)
    phone_no = serializers.CharField(write_only=True, required=True)
    first_name = serializers.CharField(required=True)
    address = serializers.CharField(write_only=True, required=True)
    zip_code = serializers.CharField(write_only=True, required=True)
    role=serializers.CharField(required=True)

    class Meta:
        model = CustomUser
        fields = ["id", "email", "first_name","phone_no", "role","address","zip_code","password"] 
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, data):
        if CustomUser.objects.filter(phone_no=data["phone_no"]).exists():
            raise serializers.ValidationError(
                {"phone_no": "This phone number is already registered."}
            )
        if CustomUser.objects.filter(email=data["email"]).exists():
            raise serializers.ValidationError("email is taken")
        return data

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            first_name=validated_data["first_name"],
            email=validated_data["email"],
            password=validated_data["password"],
            phone_no=validated_data["phone_no"],
            address=validated_data["address"],
            zip_code=validated_data["zip_code"],
            role=validated_data["role"]
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()