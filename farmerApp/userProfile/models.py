from django.db import models
from django.contrib.auth.models import User

class BuyerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name="buyer")
    address = models.TextField(max_length=255, default="")
    zip_code=models.IntegerField()
    phone_no=models.CharField(max_length=15,default="")

    def __str__(self):
        return self.user.first_name
    
class Order(models.Model):
    user = models.ForeignKey(BuyerProfile, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.IntegerField()
    
    def __str__(self):
        return f"Order #{self.id} - {self.user.user.first_name}"