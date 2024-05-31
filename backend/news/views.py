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

    def get_queryset(self):
        tag_name = self.request.query_params.get("tag")
        queryset = News.objects.filter(tags__name__icontains=tag_name).prefetch_related(
            "tags"
        )
        return queryset


class NewsDetailAPIView(RetrieveAPIView):
    queryset = News.objects.all().prefetch_related("tags")
    serializer_class = NewsDetailSerializer
