from django.db import models

# Create your models here.
class AboutMe(models.Model):
    header = models.CharField(max_length=126, default='Обо мне')
    photo = models.ImageField(upload_to='images')
    text = models.TextField()

    class Meta:
        def __str__(self):
            return self.header
