from django.db import models
from django.contrib.auth.models import User

class Product_listing(models.Model):

    WEIGHT_UNITS=[
        ("Kg","Kilogram"),
        ("Tons","Tons"),
        ("Qntls","Quintals")
    ]

    product_name=models.CharField(max_length=100)
    unit_price=models.IntegerField()
    quantity=models.CharField(max_length=100)
    unit=models.CharField(max_length=100,choices=WEIGHT_UNITS)
    harvest_date=models.DateField()
    image=models.ImageField(upload_to='farmerProfile/')
    description=models.TextField(default="")

    def __str__(self):
        return self.product_name
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name="profile")
    address = models.TextField(max_length=255, default="")
    zip_code=models.IntegerField()
    phone_no=models.CharField(max_length=15,default="")

    def __str__(self):
        return self.user.first_name