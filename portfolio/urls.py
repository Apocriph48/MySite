from django.urls import path


from . import views


urlpatterns = [
    path('getarticle/', views.GetArticlesView.as_view()),
    path('getanounce/', views.GetAnounceView.as_view()), 
]