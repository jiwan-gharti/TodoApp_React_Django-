from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Notes
from .serializers import NoteSerializers
from rest_framework import status

@api_view(['GET','POST'])
def getRouters(request):

    return Response(data = "VALUE")

@api_view(['GET'])
def getNotes(request):
    notes = Notes.objects.all().order_by('-updated')
    serializer= NoteSerializers(notes,many = True)
    return Response(serializer.data,status=status.HTTP_200_OK)

@api_view(['GET'])
def getNote(request,pk):
    notes = Notes.objects.get(pk=pk)
    serializer= NoteSerializers(notes)
    return Response(serializer.data,status=status.HTTP_200_OK)


@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Notes.objects.create(body = data['body'])
    serializer = NoteSerializers(data=note, many=False)
    return Response(serializer.data)

@api_view(['PUT','PATCH'])
def updateNote(request,pk):
    data = request.data
    note = Notes.objects.get(id=pk)
    serializer = NoteSerializers(instance=note,data= data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Notes.objects.get(id = pk)
    note.delete()
    return Response('Note Was Deleted!!',safe=True)



