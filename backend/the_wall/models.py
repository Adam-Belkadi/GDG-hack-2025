from datetime import datetime, timedelta

from django.db import models
from django.utils import timezone

from authentication.models import User
from community.models import Tag


# Create your models here.
class GlobalEvent(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField(default=timezone.now().date() + timedelta(days=1))
    location = models.CharField(max_length=255)
    isOnline = models.BooleanField(default=False)
    organizerId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='global_events')

    def __str__(self):
        return self.title


class EventTag(models.Model):
    eventId = models.ForeignKey(GlobalEvent, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('eventId', 'tagId')

    def __str__(self):
        return f"{self.eventId.title} - {self.tagId.name}"


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message


class UserInterestTags(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('userId', 'tagId')

    def __str__(self):
        return f"{self.userId.name} - {self.tagId.name}"
