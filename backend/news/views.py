from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import News, Tag
from .pagination import NewsPagination
from .serializers import NewsSerializer, TagSerializer, NewsDetailSerializer


class TagListAPIView(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class NewsListAPIView(ListAPIView):
    queryset = News.objects.all().prefetch_related("tags")
    serializer_class = NewsSerializer
    pagination_class = NewsPagination


class NewsDetailAPIView(RetrieveAPIView):
    queryset = News.objects.all().prefetch_related("tags")
    serializer_class = NewsDetailSerializer


class NewsByTagAPIView(ListAPIView):
    serializer_class = NewsDetailSerializer
    pagination_class = NewsPagination

    def get_queryset(self):
        tag = self.kwargs.get("pk")
        return News.objects.filter(tags__id=tag).prefetch_related("tags")
