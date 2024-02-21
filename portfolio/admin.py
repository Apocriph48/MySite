from django.contrib import admin
from .models import Article, PartOfArticle
# Register your models here.
admin.site.register(Article)
admin.site.register(PartOfArticle)