# Generated by Django 5.1.5 on 2025-03-02 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0003_alter_buyerprofile_user_order_delete_orders'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='total_amount',
            field=models.IntegerField(),
        ),
    ]
