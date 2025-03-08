from django.db import models
from registration.models import CustomUser

class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="buyer_order")
    
    WEIGHT_UNITS = [
        ("Kg", "Kilogram"),
        ("Tons", "Tons"),
        ("Qntls", "Quintals")
    ]

    product_name = models.CharField(max_length=100)
    # unit_price = models.IntegerField()
    quantity = models.CharField(max_length=100)
    unit = models.CharField(max_length=100, choices=WEIGHT_UNITS)
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.IntegerField()

    def __str__(self):
        return f"Order #{self.id} - {self.user.first_name} ({self.product_name})"

