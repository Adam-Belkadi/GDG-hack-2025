from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.timezone import now

from .models import Notification, GlobalEvent


@receiver(post_save, sender=GlobalEvent)
def create_notification(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            user=instance.organizerId,
            message=f"A new event that might interest you: {instance}",
            created_at=now()
        )
