from rest_framework.decorators import api_view
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
)
from rest_framework.response import Response
from .models import News, Tag
from .pagination import NewsPagination
from .serializers import (
    NewsSerializer,
    TagSerializer,
    NewsDetailSerializer,
    NewsCreateSerializer,
)


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


class NewsCreateAPIView(CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsCreateSerializer


class NewsDeleteAPIView(DestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer

    def delete(self, request, *args, **kwargs):
        print(request, args, kwargs)
        return self.destroy(request, *args, **kwargs)


@api_view(["POST"])
def like_news(request, pk):
    news = News.objects.get(id=pk)
    news.likes += 1
    news.save()
    return Response({"likes": news.likes})


@api_view(["POST"])
def dislike_news(request, pk):
    news = News.objects.get(id=pk)
    news.dislikes += 1
    news.save()
    return Response({"dislikes": news.dislikes})
