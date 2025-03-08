from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('admin/', admin.site.urls),
   path('api/',include('api.urls'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
