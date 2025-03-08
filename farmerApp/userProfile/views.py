from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializer import Search_Product,OrderSerializer
from farmerProfile.models import Product_listing
from .models import Order
# Create your views here.

class Search(APIView):
    permission_classes = [IsAuthenticated]  # Apply authentication to the entire class
    def get(self,request):
        queryset=Product_listing.objects.all()
        search=request.GET.get('search')
        if search:
            queryset=queryset.filter(product_name__startswith=search)
        serializer=Search_Product(queryset,many=True)
        return Response({
                    'message':"Product Does not exist",
                    'data':{}})

class Place_Order(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        data=request.data
        serializer=OrderSerializer(data=data)
        if serializer.is_valid():
            product_name=serializer.validated_data['product_name']
            try:
                product_name=Product_listing.objects.get(product_name=product_name)
            except Exception as e:
                return Response({
                    'message':"Product Does not exist",
                    'data':{}})
            total_amount = product_name.unit_price * int(serializer.validated_data['quantity'])
            serializer.validated_data['total_amount'] = total_amount
            quantity = int(serializer.validated_data['quantity'])
            if int(product_name.quantity) < quantity:
                return Response({
                    'message': "Not enough stock available",
                    'data': {},
                    'error': "Insufficient quantity"
                }, status=400)

            # ✅ Reduce stock
            product_name.quantity = int(product_name.quantity)- quantity
            product_name.save()

            order = Order.objects.create(
            user=request.user,  # Assuming the user is the authenticated buyer
            product_name=product_name.product_name,
            quantity=quantity,
            unit=serializer.validated_data['unit'],
            total_amount=total_amount
            )

            return Response({
                "message": "Order placed successfully",
                "order_id": order.id,
                "total_amount": total_amount
            }, status=201)
        return Response({'data':serializer.errors})