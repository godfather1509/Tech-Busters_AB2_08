from django.db import models

class Product_listing(models.Model):

    WEIGHT_UNITS=[
        ("Kg","Kilogram"),
        ("Tons","Tons"),
        ("Qntls","Quintals")
    ]

    product_name=models.CharField(max_length=100)
    unit_price=models.IntegerField()
    quantity=models.CharField(max_length=100)
    unit_quantity=models.CharField(max_length=100,choices=WEIGHT_UNITS)
    harvest_date=models.DateField()
    image=models.ImageField(upload_to='farmerProfile/')
    description=models.TextField(default="")

    def __str__(self):
        return self.product_name