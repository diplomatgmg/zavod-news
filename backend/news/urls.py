from django.urls import path

from .views import (
    NewsListAPIView,
    TagListAPIView,
    NewsDetailAPIView,
    NewsCreateAPIView,
    NewsDeleteAPIView,
    like_news,
    dislike_news,
)

urlpatterns = [
    path("news/", NewsListAPIView.as_view(), name="news"),
    path("news/<int:pk>/", NewsDetailAPIView.as_view(), name="news_detail"),
    path("news/create/", NewsCreateAPIView.as_view(), name="news_create"),
    path("news/delete/<int:pk>/", NewsDeleteAPIView.as_view(), name="news_delete"),
    path("news/like/<int:pk>/", like_news, name="news_like"),
    path("news/dislike/<int:pk>/", dislike_news, name="news_dislike"),
    path("tags/", TagListAPIView.as_view(), name="tags"),
]
