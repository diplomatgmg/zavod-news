from rest_framework import serializers
from .models import News, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"


class NewsSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = News
        fields = ("id", "title", "image", "tags", "likes", "dislikes")


class NewsDetailSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = News
        fields = "__all__"


class NewsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ("title", "content", "image")
