from django.db import models



import datetime
# Create your models here.

class Article(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField('name', max_length=126, blank=True, null=True)
    category = models.CharField('category', max_length=126, blank=True, null=True)
    date_wrote = models.DateField('date_wrote', default=datetime.datetime.now)
    date_of_change = models.DateField('date_of_change', blank=True, null=True)

    def __str__(self):
        return self.name
    

class PartOfArticle(models.Model):
    article = models.ForeignKey(Article, related_name='part_of_article', on_delete=models.CASCADE)
    paragraph = models.IntegerField('paragraph', blank=True, null=True)
    image = models.ImageField('image', blank=True, null=True)
    header = models.CharField('header', blank=True, null=True, max_length=126)
    content = models.TextField('content', blank=True, null=True)

    def __str__(self):
        return '%d: {%s: %s}' %   (self.paragraph, self.header, self.content)