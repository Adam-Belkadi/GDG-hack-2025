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
    communities = user.usercommunity_set.all()
    serializer = UserCommunitySerializer(communities, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community_posts(request, community_id):
    user = request.user
    try:
        community = user.usercommunity_set.get(id=community_id)
        posts = Post.objects.filter(communityId=community)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community(request, community_id):
    user = request.user
    community = user.usercommunity_set.get(id=community_id)
    serializer = CommunitySerializer(community)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_community_tags(request, community_id):
    user = request.user
    try:
        community = user.usercommunity_set.get(id=community_id)
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
        community = user.usercommunity_set.get(id=community_id)
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


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_ranked_users(request, community_id):
    try:
        community = Community.objects.get(id=community_id)
        enrolled_users = UserCommunity.objects.filter(communityId=community).order_by('-exp')  # Descending order
        serializer = UserCommunitySerializer(enrolled_users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_post_tags(request, community_id, post_id):
    user = request.user
    try:
        community = user.usercommunity_set.get(communityId=community_id)
        post = Post.objects.get(id=post_id, communityId=community.communityId)
        post_tags = PostTag.objects.filter(postId=post).select_related('tagId')
        tags = [pt.tagId for pt in post_tags]
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except UserCommunity.DoesNotExist:
        return Response({"error": "You are not a member of this community"}, status=status.HTTP_403_FORBIDDEN)
    except Post.DoesNotExist:
        return Response({"error": "Post not found in this community"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_community(request):
    user = request.user
    data = request.data.copy()
    data['ownerId'] = user.id
    serializer = CommunitySerializer(data=data)
    if serializer.is_valid():
        serializer.save(ownerId=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request, community_id):
    user = request.user
    try:
        community = Community.objects.get(id=community_id)
        user_community = UserCommunity.objects.get(userId=user, communityId=community)
    except Community.DoesNotExist:
        return Response({"error": "Community not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserCommunity.DoesNotExist:
        return Response({"error": "You are not a member of this community"}, status=status.HTTP_403_FORBIDDEN)
    data = request.data.copy()
    data['authorId'] = user.id
    data['communityId'] = community.id
    serializer = PostSerializer(data=data)
    if serializer.is_valid():
        serializer.save(authorId=user, communityId=community)  # Save post with author and community
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)