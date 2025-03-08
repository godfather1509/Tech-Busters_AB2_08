from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager

class CustomUserManager(BaseUserManager):
    """Custom manager for users without a username field."""

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Ensure superusers are created properly without a username field."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    ROLE = [
        ("Buyer", "Buyer"),
        ("Farmer", "Farmer"),
    ]
    phone_no = models.CharField(max_length=15)
    address = models.TextField(max_length=255)
    zip_code = models.IntegerField(null=True,blank=True)
    role=models.CharField(max_length=100,choices=ROLE)
    # Make email unique and required
    email = models.EmailField(unique=True)
    username = None

    # Use email for authentication
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  

    objects=CustomUserManager()

    def __str__(self):
        return self.first_name
    # Add custom fields if needed
