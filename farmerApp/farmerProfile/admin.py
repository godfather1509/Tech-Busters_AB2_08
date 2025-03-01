from django.contrib import admin
from .models import Product_listing
# from django.contrib.auth.models import User

# class User_register(admin.ModelAdmin):
#     list_display=('')

class Product(admin.ModelAdmin):
    list_display=('product_name',"unit_price","quantity","unit","harvest_date")
admin.site.register(Product_listing,Product)
# Register your models here.
