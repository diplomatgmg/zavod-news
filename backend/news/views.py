from rest_framework.generics import ListAPIView
from .models import News, Tag
from .pagination import NewsPagination
from .serializers import NewsSerializer, TagSerializer


class TagListAPIView(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class NewsListAPIView(ListAPIView):
    queryset = News.objects.all().prefetch_related("tags")
    serializer_class = NewsSerializer
    pagination_class = NewsPagination
