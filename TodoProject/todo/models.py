from django.db import models

# Create your models here.

class Todo(models.Model):
    id=models.AutoField(primary_key=True)
    content=models.CharField(max_length=200) 
    is_done=models.BooleanField()
	
    def __str__(self):
        return self.content