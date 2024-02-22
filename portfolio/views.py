from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Article, PartOfArticle
from .serializers import ArticleSrializer, PartOfArticleSrializer
# Create your views here.


class GetArticlesView(APIView):
    def get(self, request, format=None):
        qs = Article.objects.all()
        
        serializer = ArticleSrializer(qs, many=True)
        return Response(serializer.data)