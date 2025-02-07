from rest_framework import serializers
from .models import Community, UserCommunity, CommunityTag, Post, Tag, PostTag, Event, EventTag, UserEvent, UserStarredPost, UserStarredEvent


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ['id', 'title', 'description', 'rules', 'createdAt']


class UserCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCommunity
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'content', 'type', 'createdAt']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CommunityTagSerializer(serializers.ModelSerializer):
    tag = TagSerializer(source='tagId', read_only=True)

    class Meta:
        model = CommunityTag
        fields = ['communityId', 'tag']


class PostTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostTag
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTag
        fields = '__all__'


class UserEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEvent
        fields = '__all__'


class StarPostSerializer(serializers.ModelSerializer):
    stars = serializers.IntegerField(min_value=1, max_value=5)

    class Meta:
        model = UserStarredPost
        fields = ['stars']


class StarEventSerializer(serializers.ModelSerializer):
    stars = serializers.IntegerField(min_value=1, max_value=5)

    class Meta:
        model = UserStarredEvent
        fields = ['stars']
