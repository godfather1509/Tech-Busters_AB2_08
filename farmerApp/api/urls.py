from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenRefreshView
from farmerProfile.views import Login,Register
from rest_framework.routers import DefaultRouter

routers=DefaultRouter()
routers.register(r'register',Register,basename='user_register')
urlpatterns = [
    path('',include(routers.urls)),
    path('login/',Login.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]