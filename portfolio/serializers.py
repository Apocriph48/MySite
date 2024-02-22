from rest_framework import serializers

from .models import Article, PartOfArticle


class ArticleSrializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    date_wrote = serializers.DateField(read_only=True)
    date_of_change = serializers.DateField(read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'name', 'date_wrote', 'date_of_change')

class PartOfArticleSrializer(serializers.Serializer):
    article = serializers.PrimaryKeyRelatedField( read_only=True, many=True)
    paragraph = serializers.IntegerField()
    image = serializers.ImageField()
    header = serializers.CharField(max_length=126)
    content = serializers.CharField()

    class Meta:
        model = PartOfArticle
        fields = '__all__'