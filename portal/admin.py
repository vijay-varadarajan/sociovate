from django.contrib import admin

# Register your models here.
from .models import User, Team, UserStatus, Submission
    
    
admin.site.register(User)
admin.site.register(Team)
admin.site.register(UserStatus)
admin.site.register(Submission)
