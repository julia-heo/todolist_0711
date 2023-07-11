from django.shortcuts import render,redirect,get_object_or_404
from .models import *

# Create your views here.

def home(request): # 메인화면
    todos=Todo.objects.filter(is_done=False)
    dones=Todo.objects.filter(is_done=True)
    return render (request,'index.html',{'todos':todos,'dones':dones})

def create(request): #저장
    print("create함수 호출")
    new_todo=Todo()
    new_todo.content=request.POST['content']
    new_todo.is_done=False
    new_todo.save()
    return redirect('home')

def delete(request, todo_id):
    todo_delete=get_object_or_404(Todo,pk=todo_id)
    todo_delete.delete()
    return redirect('home')

def update(request,todo_id): # 완료여부 변경
    todo_update=get_object_or_404(Todo,pk=todo_id)
    if todo_update.is_done==True:
        todo_update.is_done=False
    else:
        todo_update.is_done=True
    todo_update.save()
    return redirect('home')