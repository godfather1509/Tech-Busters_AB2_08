from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenRefreshView
from .views import Search,Place_Order
from rest_framework.routers import DefaultRouter

routers=DefaultRouter()
urlpatterns = [
    path('',include(routers.urls)),
    path('placeOrder/',Place_Order.as_view()),
    path('search/',Search.as_view()),
]