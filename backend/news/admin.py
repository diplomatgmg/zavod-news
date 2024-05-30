from django.contrib import admin

from .models import Tag, News

admin.site.register(Tag)
admin.site.register(News)
