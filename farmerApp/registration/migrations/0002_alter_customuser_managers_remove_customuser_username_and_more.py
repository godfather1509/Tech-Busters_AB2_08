# Generated by Django 5.1.5 on 2025-03-06 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='customuser',
            managers=[
            ],
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='username',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='address',
            field=models.TextField(max_length=255),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='phone_no',
            field=models.CharField(max_length=15),
        ),
    ]
