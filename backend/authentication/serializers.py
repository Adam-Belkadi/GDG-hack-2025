from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["email"] = user.email
        return token

    def validate(self, attrs):
        # Validate the email instead of username
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                raise serializers.ValidationError("Invalid credentials")

            if not user.check_password(password):
                raise serializers.ValidationError("Invalid credentials")

            if not user.is_active:
                raise serializers.ValidationError("User is inactive")

            refresh = self.get_token(user)
            access = refresh.access_token

            return {
                "refresh": str(refresh),
                "access": str(access),
            }
        else:
            raise serializers.ValidationError("Email and password are required")


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, min_length=8)

    class Meta:
        model = User
        fields = ['email', 'password']

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        if not email:
            raise serializers.ValidationError({"email": "This field is required."})
        if not password:
            raise serializers.ValidationError({"password": "This field is required."})

        return attrs

    def create(self, validated_data):
        # Remove the password confirmation field before saving
        validated_data['password'] = make_password(validated_data['password'])  # Hash password
        validated_data['is_active'] = True  # Set user active
        user = super().create(
            validated_data
        )
        return user
