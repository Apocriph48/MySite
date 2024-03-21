from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Article, PartOfArticle
from .serializers import ArticleSerializer, PartOfArticleSerializer, AnounceSerializer,ForAnounceSerializer
from django.db.models import Prefetch


# Create your views here.


class GetArticlesView(APIView):
    def post(self, request, format=None):
        if (request.data):
            print(request.data)
            prefetch = Prefetch('part_of_article', PartOfArticle.objects.all())
            qs = Article.objects.all().filter(id=request.data['id']).prefetch_related(prefetch)        
            serializer = ArticleSerializer(qs, many=True)
            print(serializer.data) 
            return Response(serializer.data)
        else:
            return Response({})
    


class GetAnounceView(APIView):
    def post(self, request, format=None):
        if (request.data):
            print(request.data)
        prefetch = Prefetch('part_of_article', PartOfArticle.objects.filter(paragraph=1))
        qs = Article.objects.all().prefetch_related(prefetch)
        serializer = AnounceSerializer(qs, many=True)
        for i, _dict in enumerate(serializer.data):   # считаю, что это костыль, но я не нашёл нигде информацию о том
            # как обрезать текст сразу при создании queryset (запросах с БД)         
            spliced_article = _dict['part_of_article'][0]['content'][:100]
            serializer.data[i]['part_of_article'][0]['content']=spliced_article
        return Response(serializer.data)