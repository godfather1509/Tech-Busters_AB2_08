from django.db import models
from registration.models import CustomUser
class Product_listing(models.Model):

    WEIGHT_UNITS=[
        ("Kg","Kilogram"),
        ("Tons","Tons"),
        ("Qntls","Quintals")
    ]
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="farmer_product")
    product_name=models.CharField(max_length=100)
    unit_price=models.IntegerField()
    quantity=models.CharField(max_length=100)
    unit=models.CharField(max_length=100,choices=WEIGHT_UNITS)
    harvest_date=models.DateField()
    image=models.ImageField(upload_to='farmerProfile/')
    description=models.TextField(default="")

    def __str__(self):
        return self.product_name