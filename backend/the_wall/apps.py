from django.apps import AppConfig


class TheWallConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'the_wall'

    def ready(self):
        import the_wall.signals