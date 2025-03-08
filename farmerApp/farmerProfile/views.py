from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ModelViewSet
from .serializer import Product_Serializer
from .models import Product_listing

# Create your views here.
class ProductList(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        data=request.data
        serializer=Product_Serializer(data=data)
        if serializer.is_valid():
            product = Product_listing.objects.create(
            user=request.user,  # Assuming the user is the authenticated buyer
            product_name=serializer.validated_data['product_name'],
            quantity=serializer.validated_data['quantity'],
            unit=serializer.validated_data['unit'],
            unit_price=serializer.validated_data['unit_price'],
            harvest_date=serializer.validated_data['hravest_date'],
            image=serializer.validated_data['image'],
            description=serializer.validated_data['description']
            )
            return Response({
                "message": "Product listed Succesfully",
                "order_id": product.id,
            }, status=201)
        return Response({'data':serializer.errors})


