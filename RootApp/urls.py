from django.conf.urls import url
from django.urls import path
from django.conf import settings 
from django.conf.urls.static import static

from .views import rootApi,leafApi,homeView,setUser,logout_view



urlpatterns = [
    path("",homeView),
    path("dept/",rootApi),
    path("dept/<int:id>/",rootApi),
    path("emp/",leafApi),
    path("emp/<int:id>/",leafApi),
    path("user/",setUser),
    path("user/<int:id>/",setUser),
    path("logout/",logout_view)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)