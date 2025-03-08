from django.urls import path,include
from rest_framework_simplejwt.views import TokenRefreshView
from .views import Login,Register,register
from rest_framework.routers import DefaultRouter

routers=DefaultRouter()
routers.register(r'user_register',Register,basename='user_register')
urlpatterns = [
    path('',include(routers.urls)),
    path('login/',Login.as_view()),
    path('register/',register,name='register'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]