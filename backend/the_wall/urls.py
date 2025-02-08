from django.urls import path
from .views import notification_list, create_global_event, get_notifications_by_interest

urlpatterns = [
    path('notifications/', notification_list, name='notification-list'), # tested
    path('global-event/create/', create_global_event, name='create_global_event'), # tested
    path('notifications/interested/', get_notifications_by_interest, name='notifications-by-interest'),
]
