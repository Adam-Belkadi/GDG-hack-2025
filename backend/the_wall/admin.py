from django.contrib import admin
from .models import GlobalEvent, Notification

# Register your models here.
admin.site.register(GlobalEvent)
admin.site.register(Notification)