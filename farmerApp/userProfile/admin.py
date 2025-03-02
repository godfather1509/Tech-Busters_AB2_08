from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import BuyerProfile,Order



# Inline Admin for UserProfile
class BuyerProfileInline(admin.StackedInline):
    model = BuyerProfile
    can_delete = False
    verbose_name_plural = "Buyer Profile"

# Extend UserAdmin to include UserProfile
class CustomBuyerAdmin(UserAdmin):
    inlines = (BuyerProfileInline,)

    def address(self, obj):
        return obj.buyer.address

    def phone_no(self, obj):
        return obj.buyer.phone_no
    
    def zip_code(self,obj):
        return obj.buyer.zip_code
    
    list_display=('username','email','first_name','phone_no','address','zip_code')

# Unregister default User admin and register the new one
admin.site.unregister(User)
admin.site.register(User, CustomBuyerAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display=('user',"order_date","total_amount")

admin.site.register(Order,OrderAdmin)


