# Generated by Django 5.1.5 on 2025-03-01 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('farmerProfile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='zip_code',
            field=models.IntegerField(default=123),
            preserve_default=False,
        ),
    ]
