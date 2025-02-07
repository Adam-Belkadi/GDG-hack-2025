from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import (
    Community,
    UserCommunity,
    CommunityTag,
    Post,
    Tag,
    PostTag,
    Event,
    EventTag,
    UserEvent,
    Opportunity,
    OpportunityTag,
)
from .serializers import (
    CommunitySerializer,
    UserCommunitySerializer,
    PostSerializer,
    TagSerializer,
    PostTagSerializer,
    EventSerializer,
    EventTagSerializer,
    UserEventSerializer,
    OpportunitySerializer,
    OpportunityTagSerializer,
)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_communities(request):
    communities = Community.objects.all()
    serializer = CommunitySerializer(communities, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_enrolled_communities(request):
    user = request.user
    communities = user.community_set.all()
    serializer = UserCommunitySerializer(communities, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community_posts(request, community_id):
    user = request.user
    try:
        community = user.community_set.get(id=community_id)
        posts = Post.objects.filter(communityId=community)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community(request, community_id):
    user = request.user
    community = user.community_set.get(id=community_id)
    serializer = CommunitySerializer(community)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community_tags(request, community_id):
    user = request.user
    try:
        community = user.community_set.get(id=community_id)
        community_tags = CommunityTag.objects.filter(communityId=community).select_related('tagId')
        tags = [ct.tagId for ct in community_tags]
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def search_communities(request):
    tag_name = request.GET.get('tag', None)  # Example: ?tag=Blockchain
    search_query = request.GET.get('name', None)  # Example: ?name=Tech
    communities = Community.objects.all()
    if tag_name:
        try:
            tag = Tag.objects.get(name__iexact=tag_name)  # Case-insensitive match
            community_ids = CommunityTag.objects.filter(tagId=tag).values_list('communityId', flat=True)
            communities = communities.filter(id__in=community_ids)
        except Tag.DoesNotExist:
            return Response({"message": "No communities found for this tag"}, status=status.HTTP_200_OK)
    if search_query:
        communities = communities.filter(title__icontains=search_query)  # Case-insensitive partial match
    serializer = CommunitySerializer(communities, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community_events(request, community_id):
    user = request.user
    try:
        community = user.community_set.get(id=community_id)
        events = Event.objects.filter(communityId=community)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community_events_by_tag(request, community_id):
    tag_name = request.GET.get('tag', None)
    try:
        community = Community.objects.get(id=community_id)
        events = Event.objects.filter(communityId=community)
        if tag_name:
            try:
                tag = Tag.objects.get(name__iexact=tag_name)  # Case-insensitive search
                event_ids = EventTag.objects.filter(tagId=tag).values_list('eventId', flat=True)
                events = events.filter(id__in=event_ids)
            except Tag.DoesNotExist:
                return Response({"message": "No events found for this tag"}, status=status.HTTP_200_OK)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class PostTagViewSet(viewsets.ModelViewSet):
    queryset = PostTag.objects.all()
    serializer_class = PostTagSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventTagViewSet(viewsets.ModelViewSet):
    queryset = EventTag.objects.all()
    serializer_class = EventTagSerializer


class UserEventViewSet(viewsets.ModelViewSet):
    queryset = UserEvent.objects.all()
    serializer_class = UserEventSerializer


class OpportunityViewSet(viewsets.ModelViewSet):
    queryset = Opportunity.objects.all()
    serializer_class = OpportunitySerializer


class OpportunityTagViewSet(viewsets.ModelViewSet):
    queryset = OpportunityTag.objects.all()
    serializer_class = OpportunityTagSerializer


class GlobalEventViewSet(viewsets.ModelViewSet):
    queryset = GlobalEvent.objects.all()
    serializer_class = GlobalEventSerializer
