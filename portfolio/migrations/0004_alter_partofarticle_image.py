# Generated by Django 5.0.1 on 2024-03-23 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_article_category_alter_partofarticle_article'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partofarticle',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images', verbose_name='image'),
        ),
    ]
