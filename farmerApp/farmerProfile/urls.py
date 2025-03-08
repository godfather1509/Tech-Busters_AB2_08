from django.contrib import admin
from django.urls import path,include
from .views import ProductList
from rest_framework.routers import DefaultRouter

routers=DefaultRouter()
routers.register(r'list_product',ProductList,basename='Product list')
urlpatterns = [
    path('',include(routers.urls)),
]