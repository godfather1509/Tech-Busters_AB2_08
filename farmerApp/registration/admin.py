from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin
from userProfile.admin import OrderInline

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'first_name','phone_no','role','address','zip_code')
    ordering = ["email"]
    model = CustomUser
    search_fields = ("email", "first_name", "phone_no")
    ordering = ("email",)
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal Info", {"fields": ("first_name", "phone_no", "address", "zip_code", "role")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important Dates", {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "first_name", "phone_no", "password1", "password2", "role"),
            },
        ),
    )
    inlines = [OrderInline]

admin.site.register(CustomUser, CustomUserAdmin)