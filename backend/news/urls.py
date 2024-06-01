from django.urls import path

from .views import (
    NewsListAPIView,
    TagListAPIView,
    NewsDetailAPIView,
    NewsCreateAPIView,
    NewsDeleteAPIView,
)

urlpatterns = [
    path("news/", NewsListAPIView.as_view(), name="news"),
    path("news/<int:pk>/", NewsDetailAPIView.as_view(), name="news_detail"),
    path("news/create/", NewsCreateAPIView.as_view(), name="news_create"),
    path("news/delete/<int:pk>/", NewsDeleteAPIView.as_view(), name="news_delete"),
    path("tags/", TagListAPIView.as_view(), name="tags"),
]
