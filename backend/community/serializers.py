from rest_framework import serializers
from .models import Community, UserCommunity, CommunityTag, Post, Tag, PostTag, Event, EventTag, UserEvent, Opportunity, \
    OpportunityTag


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'


class UserCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCommunity
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


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


class OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields = '__all__'


class OpportunityTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpportunityTag
        fields = '__all__'


