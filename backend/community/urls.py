from django.urls import path
from .views import (
    get_communities,
    get_user_enrolled_communities,
    get_community_posts,
    get_community,
    get_community_tags,
    search_communities,
    get_all_tags,
    get_community_events,
    get_community_events_by_tag,
)

urlpatterns = [
    # Get all communities
    path('communities/', get_communities, name='get-communities'),

    # Get communities the user is enrolled in
    path('communities/enrolled/', get_user_enrolled_communities, name='get-user-enrolled-communities'),

    # Get a single community by ID
    path('community/<int:community_id>/', get_community, name='get-community'),

    # Get all posts of a community
    path('community/<int:community_id>/posts/', get_community_posts, name='get-community-posts'),

    # Get all tags of a community
    path('community/<int:community_id>/tags/', get_community_tags, name='get-community-tags'),

    # Search communities by tag or name
    path('communities/search/', search_communities, name='search-communities'),

    # Get all tags
    path('tags/', get_all_tags, name='get-all-tags'),

    # Get all events of a community
    path('communities/<int:community_id>/events/', get_community_events, name='get-community-events'),

    # Get all events of a community with a special tag
    path('communities/<uuid:community_id>/events/filter/', get_community_events_by_tag, name='get-community-events-by-tag'),
]
