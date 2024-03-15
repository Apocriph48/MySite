# Generated by Django 5.0.1 on 2024-03-11 10:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_alter_article_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(blank=True, max_length=126, null=True, verbose_name='category'),
        ),
        migrations.AlterField(
            model_name='partofarticle',
            name='article',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='part_of_article', to='portfolio.article'),
        ),
    ]