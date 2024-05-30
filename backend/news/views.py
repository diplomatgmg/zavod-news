from rest_framework.generics import ListAPIView
from .models import News, Tag
from .serializers import NewsSerializer, TagSerializer


class TagListAPIView(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class NewsListAPIView(ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
