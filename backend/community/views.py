from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import (
    Community,
    UserCommunity,
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
    UserSerializer,
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
    GlobalEventSerializer,
)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_communities(request):
    communities = Community.objects.all()
    serializer = CommunitySerializer(communities, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_enrolled_communities(request):
    user = request.user
    communities = user.community_set.all()
    serializer = UserCommunitySerializer(communities, many=True)
    return Response(serializer.data)


def get_community_posts(request):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


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
