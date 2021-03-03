from django.conf.urls import url
from django.urls import path
from django.conf import settings 
from django.conf.urls.static import static

from .views import fieldsView,memberView,homeView,setUserView,logout_view


urlpatterns = [
    path("",homeView),
    path("dept/",fieldsView),
    path("dept/<int:id>/",fieldsView),
    path("emp/",memberView),
    path("emp/<int:id>/",memberView),
    path("user/",setUserView),
    path("user/<int:id>/",setUserView),
    path("logout/",logout_view)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)