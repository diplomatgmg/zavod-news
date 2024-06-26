# Generated by Django 5.0.6 on 2024-06-01 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Tag",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="News",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("content", models.TextField()),
                ("image", models.ImageField(upload_to="news_images/")),
                ("likes", models.IntegerField(default=0)),
                ("dislikes", models.IntegerField(default=0)),
                ("tags", models.ManyToManyField(to="news.tag")),
            ],
            options={
                "ordering": ["-id"],
            },
        ),
    ]
