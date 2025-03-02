from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import BuyerProfile,Order

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import BuyerUser, BuyerProfile

class BuyerProfileInline(admin.StackedInline):
    model = BuyerProfile
    can_delete = False
    verbose_name_plural = "Buyer Profile"

class BuyerAdmin(UserAdmin):
    inlines = [BuyerProfileInline]
    list_display = ('username', 'email', 'first_name')

admin.site.register(BuyerUser, BuyerAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display=('user',"order_date","total_amount")

admin.site.register(Order,OrderAdmin)