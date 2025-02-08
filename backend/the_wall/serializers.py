from rest_framework import serializers
from .models import Notification, GlobalEvent


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'message', 'read', 'created_at']


class GlobalEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalEvent
        fields = '__all__'