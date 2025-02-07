from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import (
    User,
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
    GlobalEvent,
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
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class UserCommunityViewSet(viewsets.ModelViewSet):
    queryset = UserCommunity.objects.all()
    serializer_class = UserCommunitySerializer


class PostViewSet(viewsets.ModelViewSet):
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
