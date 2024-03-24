from django.urls import path


from . import views


urlpatterns = [
    path('', views.AboutMeView.as_view()),
]