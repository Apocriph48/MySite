from rest_framework import serializers

from .models import AboutMe




class AboutMeSerializer(serializers.Serializer):
    header = serializers.CharField(read_only=True)
    photo = serializers.ImageField(read_only=True)
    text = serializers.CharField(read_only=True)

    class Meta:
        model = AboutMe
        fields = ('header', 'photo', 'text')
        # fields = '__all__'
