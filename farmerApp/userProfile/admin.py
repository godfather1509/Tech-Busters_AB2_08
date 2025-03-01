from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import BuyerProfile

# Inline Admin for UserProfile
class BuyerProfileInline(admin.StackedInline):
    model = BuyerProfile
    can_delete = False
    verbose_name_plural = "User Profile"

# Extend UserAdmin to include UserProfile
class CustomUserAdmin(UserAdmin):
    inlines = (BuyerProfileInline,)

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
