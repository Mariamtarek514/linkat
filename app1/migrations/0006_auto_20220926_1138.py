# Generated by Django 2.2.5 on 2022-09-26 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_auto_20220926_1137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(null=True, upload_to='media/%y/%m/%d'),
        ),
    ]
