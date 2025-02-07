from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    CommunityViewSet,
    UserCommunityViewSet,
    PostViewSet,
    TagViewSet,
    PostTagViewSet,
    EventViewSet,
    EventTagViewSet,
    UserEventViewSet,
    OpportunityViewSet,
    OpportunityTagViewSet,
    GlobalEventViewSet,
)

# Create a router and register the viewsets
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'communities', CommunityViewSet)
router.register(r'user-communities', UserCommunityViewSet)
router.register(r'posts', PostViewSet)
router.register(r'tags', TagViewSet)
router.register(r'post-tags', PostTagViewSet)
router.register(r'events', EventViewSet)
router.register(r'event-tags', EventTagViewSet)
router.register(r'user-events', UserEventViewSet)
router.register(r'opportunities', OpportunityViewSet)
router.register(r'opportunity-tags', OpportunityTagViewSet)
router.register(r'global-events', GlobalEventViewSet)

urlpatterns = [
    # Include the router's URLs
    path('', include(router.urls)),
]
