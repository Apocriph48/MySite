from django.db import models
import datetime
# Create your models here.

class Article(models.Model):
    name = models.CharField('name', max_length=126, blank=True, null=True)
    date_wrote = models.DateField('date_wrote', default=datetime.datetime.now)
    date_of_change = models.DateField('date_of_change', blank=True, null=True)
    

class PartOfArticle(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    paragraph = models.IntegerField('paragraph', blank=True, null=True)
    image = models.ImageField('image', blank=True, null=True)
    header = models.CharField('header', blank=True, null=True, max_length=126)
    content = models.TextField('content', blank=True, null=True)