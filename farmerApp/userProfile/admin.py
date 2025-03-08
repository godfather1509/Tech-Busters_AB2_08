from django.contrib import admin
from .models import Order
from django.contrib import admin

# class OrderAdmin(admin.ModelAdmin):
#     list_display=("order_date","total_amount")

class OrderInline(admin.TabularInline):
    model = Order
    extra = 0
    fields = ('product_name', 'quantity', 'unit', 'total_amount', 'order_date')
    readonly_fields = ('order_date', 'total_amount')

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'product_name', 'quantity', 'unit', 'total_amount', 'order_date')
    list_filter = ('order_date', 'user')
    search_fields = ('product_name', 'user__first_name', 'user__last_name', 'user__email')
    ordering = ('-order_date',)
    # raw_id_fields = ('parent_order',)

admin.site.register(Order,OrderAdmin)