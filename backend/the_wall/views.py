from django.db.models import Q
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Notification, GlobalEventTag, UserInterestTags
from .serializers import NotificationSerializer, GlobalEventSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def notification_list(request):
    notifications = Notification.objects.filter(user=request.user)
    serializer = NotificationSerializer(notifications, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_global_event(request):
    user = request.user
    data = request.data.copy()

    data['organizerId'] = user.id

    serializer = GlobalEventSerializer(data=data)
    if serializer.is_valid():
        serializer.save(organizerId=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notifications_by_interest(request):
    user = request.user
    interested_tags = UserInterestTags.objects.filter(userId=user).values_list('tagId', flat=True)
    event_ids = GlobalEventTag.objects.filter(tagId__in=interested_tags).values_list('eventId', flat=True)

    notifications = Notification.objects.filter(
        Q(user=user) |  # Personal notifications
        Q(message__icontains="Event")  # Global event notifications
    ).distinct()

    serializer = NotificationSerializer(notifications, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
