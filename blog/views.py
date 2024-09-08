from django.shortcuts import render
from django.template.response import TemplateResponse

from .models import BlogPost

# Create your views here.

def blog_search(request):
    args = {}
    query = BlogPost.objects.all()
    # when 3 posts are made, this can be removed in theory
    # and then problems would only arise if the database is
    # cleared (hopefully due to a migration)
    num_posts = 3 if len(query) >= 3 else len(query)
    args['posts'] = list(reversed(query))[-num_posts:]
    return TemplateResponse(request, 'blog_search.html', args)

def load_post(request, post_name):
    return render(request, '%s.html' % post_name)