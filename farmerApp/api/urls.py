from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('farmer/',include('farmerProfile.urls')),
    path('buyer/',include('userProfile.urls')),
    path('register/',include('registration.urls')),
]