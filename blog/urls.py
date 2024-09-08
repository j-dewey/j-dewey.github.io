from django.urls import path

from . import views

urlpatterns = [
    path("", views.blog_search, name="blog"),
    path("<str:post_name>/", views.load_post, name="load_post")
]