from django.contrib import admin
from .models import Community, Tag, Post, UserCommunity, Event, UserEvent, UserStarredPost, UserStarredEvent

# Register your models here.
admin.site.register(Community)
admin.site.register(Tag)
admin.site.register(Post)
admin.site.register(UserStarredPost)
admin.site.register(Event)
admin.site.register(UserEvent)
admin.site.register(UserCommunity)
admin.site.register(UserStarredEvent)
