from rest_framework import serializers

from .models import Article, PartOfArticle




class ArticleSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    category = serializers.CharField(read_only=True)
    date_wrote = serializers.DateField(read_only=True)
    date_of_change = serializers.DateField(read_only=True)
    part_of_article = serializers.StringRelatedField(many=True) 
    class Meta:
        model = Article
        fields = ('id', 'name','category', 'date_wrote', 'date_of_change', 'part_of_article')

class PartOfArticleSerializer(serializers.Serializer):
    article = serializers.PrimaryKeyRelatedField(queryset=PartOfArticle.objects.all(),  many=True)
    paragraph = serializers.IntegerField()
    image = serializers.ImageField()
    header = serializers.CharField(max_length=126)
    content = serializers.CharField(max_length=5) 


    class Meta:
        model = PartOfArticle
        fields = '__all__'



class ForAnounceSerializer(serializers.Serializer):
    article = serializers.PrimaryKeyRelatedField(read_only=True)
    paragraph = serializers.IntegerField(read_only=True)
    image = serializers.ImageField(read_only=True)
    header = serializers.CharField(max_length=126, read_only=True)
    content = serializers.CharField(max_length=32, read_only=True)

    class Meta:
        model = PartOfArticle
        fields = ('article','image', 'paragraph','header', 'content') 



class AnounceSerializer(serializers.Serializer):
    # qs = PartOfArticle.objects.filter(paragraph=1)
    # print(qs)

    
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    category = serializers.CharField(read_only=True)
    date_wrote = serializers.DateField(read_only=True)
    date_of_change = serializers.DateField(read_only=True)
    part_of_article=ForAnounceSerializer( many=True)
    # part_of_article = serializers.StringRelatedField(many=True)
    # part_of_article = serializers.SlugRelatedField(PartOfArticle.objects.filter(paragraph=1), slug_field='paragraph', many=True)
    class Meta: 
        model = Article
        fields = ('id', 'name',  'category', 'date_wrote', 'date_of_change', 'part_of_article')
