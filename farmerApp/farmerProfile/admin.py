from django.contrib import admin
from .models import Product_listing

class Product(admin.ModelAdmin):
    list_display=('user','product_name',"unit_price","quantity","unit","harvest_date")
admin.site.register(Product_listing,Product)
# Register your models here.
