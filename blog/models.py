from django.db import models

# Create your models here.
class BlogPost(models.Model):
    blog_name = models.CharField(max_length=100)
    pub_date = models.DateTimeField("date published")
    preview = models.CharField(max_length=200)
    img_name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f'''Blog Post: {self.blog_name}
        Posted On: {self.pub_date}
        \t {self.preview}
        \t {self.img_name}
        '''