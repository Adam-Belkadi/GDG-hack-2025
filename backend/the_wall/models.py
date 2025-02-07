from django.db import models
from authentication.models import User


# Create your models here.
class GlobalEvent(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=255)
    isOnline = models.BooleanField(default=False)
    organizerId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='global_events')

    def __str__(self):
        return self.title