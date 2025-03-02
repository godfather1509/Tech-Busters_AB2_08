# Generated by Django 5.1.5 on 2025-03-02 03:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('farmerProfile', '0002_userprofile_zip_code'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='farmer_profile', to=settings.AUTH_USER_MODEL),
        ),
    ]
