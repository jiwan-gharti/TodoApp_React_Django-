from django.urls import path
from . import views

urlpatterns = [
    path("",view=views.getRouters, name="routes"),
    path("notes/",view=views.getNotes, name="notes"),
    path("notes/create/",view=views.createNote, name="create_note"),
    path("notes/<int:pk>/update/",view=views.updateNote, name="update_note"),
    path("notes/<int:pk>/delete/",view=views.deleteNote, name="delete_note"),
    path("notes/<int:pk>/",view=views.getNote, name="notes"),
]
