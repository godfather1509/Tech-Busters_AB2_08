from django.contrib import admin
from django.urls import path,include
from .views import ProductList

urlpatterns = [
    path('list_product/',ProductList.as_view())
]