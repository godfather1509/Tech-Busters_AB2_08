from django.contrib import admin
from .models import Product_listing
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import UserProfile,Product_listing,FarmerUser

class Product(admin.ModelAdmin):
    list_display=('product_name',"unit_price","quantity","unit","harvest_date")
admin.site.register(Product_listing,Product)
# Register your models here.

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = "Farmer Profile"

class FarmerAdmin(UserAdmin):
    inlines = [UserProfileInline]
    list_display = ('username', 'email', 'first_name')

admin.site.register(FarmerUser, FarmerAdmin)

