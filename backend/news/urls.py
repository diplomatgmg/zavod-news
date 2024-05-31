from django.urls import path

from .views import NewsListAPIView, TagListAPIView, NewsDetailAPIView

urlpatterns = [
    path("news/", NewsListAPIView.as_view(), name="news"),
    path("news/<int:pk>/", NewsDetailAPIView.as_view(), name="news_detail"),
    path("tags/", TagListAPIView.as_view(), name="tags"),
]
