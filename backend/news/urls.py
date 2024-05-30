from django.urls import path

from .views import NewsListAPIView, TagListAPIView

urlpatterns = [
    path("news/", NewsListAPIView.as_view(), name="news"),
    path("tags/", TagListAPIView.as_view(), name="tags"),
]
