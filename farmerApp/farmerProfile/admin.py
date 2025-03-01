from django.contrib import admin
from .models import Product_listing
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import UserProfile,Product_listing

class Product(admin.ModelAdmin):
    list_display=('product_name',"unit_price","quantity","unit","harvest_date")
admin.site.register(Product_listing,Product)
# Register your models here.

# Inline Admin for UserProfile
class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = "User Profile"

# Extend UserAdmin to include UserProfile
class CustomUserAdmin(UserAdmin):
    inlines = (UserProfileInline,)

    def address(self, obj):
        return obj.userprofile.address

    def phone_no(self, obj):
        return obj.userprofile.phone_no
    
    def zip_code(self,obj):
        return obj.userprofile.zip_code

    list_display=('username','email','first_name','phone_no','address','zip_code')

# Unregister default User admin and register the new one
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
