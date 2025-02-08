from django.db import models
from authentication.models import User


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Community(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    rules = models.TextField()
    ownerId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_communities')
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class UserCommunity(models.Model):
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('Member', 'Member'),
        ('Recruiter', 'Recruiter'),
    ]

    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    communityId = models.ForeignKey(Community, on_delete=models.CASCADE)
    exp = models.IntegerField(default=0)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    joinedAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('userId', 'communityId')

    def __str__(self):
        return f"{self.userId.email} - {self.communityId.title}"


class CommunityTag(models.Model):
    communityId = models.ForeignKey(Community, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('communityId', 'tagId')

    def __str__(self):
        return f"{self.communityId.title} - {self.tagId.name}"


class Post(models.Model):
    POST_TYPE_CHOICES = [
        ('Solution', 'Solution'),
        ('Roadmap', 'Roadmap'),
        ('Summary', 'Summary'),
        ('Discussion', 'Discussion'),
    ]

    content = models.TextField()
    authorId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    communityId = models.ForeignKey(Community, on_delete=models.CASCADE, related_name='posts')
    type = models.CharField(max_length=20, choices=POST_TYPE_CHOICES)
    createdAt = models.DateTimeField(auto_now_add=True)
    average_stars = models.FloatField(default=0)
    total_ratings = models.IntegerField(default=0)

    def __str__(self):
        return f"Post by {self.authorId.email} in {self.communityId.title}"


class UserStarredPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='starred_by')
    stars = models.PositiveIntegerField(default=1)  # Rating from 1 to 5

    class Meta:
        unique_together = ('user', 'post')  # Prevent duplicate ratings

    def __str__(self):
        return f"{self.user.email} starred {self.post.id} with {self.stars} stars"


class PostTag(models.Model):
    postId = models.ForeignKey(Post, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('postId', 'tagId')

    def __str__(self):
        return f"{self.postId.id} - {self.tagId.name}"


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=255)
    isOnline = models.BooleanField(default=False)
    organizerId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='organized_events')
    communityId = models.ForeignKey(Community, on_delete=models.CASCADE, related_name='events')
    average_stars = models.FloatField(default=0)
    total_ratings = models.IntegerField(default=0)

    def __str__(self):
        return self.title



class EventTag(models.Model):
    eventId = models.ForeignKey(Event, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('eventId', 'tagId')

    def __str__(self):
        return f"{self.eventId.title} - {self.tagId.name}"


class UserEvent(models.Model):
    RSVP_STATUS_CHOICES = [
        ('Going', 'Going'),
        ('Interested', 'Interested'),
        ('Not Going', 'Not Going'),
    ]

    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    eventId = models.ForeignKey(Event, on_delete=models.CASCADE)
    RSVPStatus = models.CharField(max_length=20, choices=RSVP_STATUS_CHOICES)

    class Meta:
        unique_together = ('userId', 'eventId')

    def __str__(self):
        return f"{self.userId.email} - {self.eventId.title}"


class UserStarredEvent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='starred_by')
    stars = models.PositiveIntegerField(default=1)
    starred_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ('user', 'event')

    def __str__(self):
        return f"{self.user.email} starred {self.event.title} with {self.stars} stars"
