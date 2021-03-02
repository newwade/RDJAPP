from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.core.files.storage import default_storage
from django.http import HttpResponse,HttpResponseRedirect
from django.http.response import JsonResponse
from django.contrib.auth import authenticate,login,logout
from .models import Departments,Employees,Usermodel 
from .serializers import DeptSerializer,EmpSerializer,UserSerializer
 
# Create your views here.
def homeView(request):
    if (request.user.is_authenticated):
        print(request.user)
    else:
        print(None)
    return HttpResponse("<h1>Home Page!</h1>")
@csrf_exempt
def setUser(request,id=0):
    if request.method=="GET":
        users=Usermodel.objects.all()
        users_serializer=UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data,safe=False)
    elif request.method=="POST":
        user_data=JSONParser().parse(request)
        user_name=user_data["userName"]
        print(user_name)
        user_pass=user_data["userPass"]
        print(user_pass)
        user=authenticate(request,username=user_name,password=user_pass)
        if user is not None:
            if user.is_authenticated:
                print("ADDED")
                return JsonResponse("YOU'RE IN",safe=False)
        else:
            return JsonResponse("INVALID USER",safe=False)
    elif request.method=="DELETE":
        user_data=Usermodel.objects.get(userId=id)
        user_data.delete()

        return JsonResponse("DELETED SUCCESSFULLY",safe=False)
            # print(user,request)
            # logged=login(request,user)
            # if logged:
                # print("L/OGGED IN")
        #     user_serializer=UserSerializer(data=user_data)
        #     if user_serializer.is_valid():
        #         user_serializer.save()

        #     return JsonResponse("Success",safe=False)
        # else:
        #     print("INVALID USER")
        #     return JsonResponse("1",safe=False)
@csrf_exempt
def logout_view(request):
    logout(request)
    return HttpResponse("<h1>logged out</h1>")

@csrf_exempt
def rootApi(request,id=0):
        if request.method=="GET":
            departments=Departments.objects.all()
            departments_serializer=DeptSerializer(departments,many=True)
            return JsonResponse(departments_serializer.data,safe=False)
        elif request.method=="POST":
            dept_data=JSONParser().parse(request)
            dept_serializer=DeptSerializer(data=dept_data)
            if dept_serializer.is_valid():
                dept_serializer.save()
                return JsonResponse("Added",safe=False)
            return JsonResponse("Error",safe=False)
        elif request.method=="PUT":
            dept_data=JSONParser().parse(request)
            dept=Departments.objects.get(deptID=dept_data["deptID"])
            dept_serializer=DeptSerializer(dept,data=dept_data)
            if dept_serializer.is_valid():
                dept_serializer.save()
                return JsonResponse("Added",safe=False)
            return JsonResponse("Error updating",safe=False)
        elif request.method=="DELETE":
            dept=Departments.objects.get(deptID=id)
            dept.delete()
            return JsonResponse("Deleted",safe=False)
  

@csrf_exempt
def leafApi(request,id=0):
    if request.method=="GET":
        employees=Employees.objects.all()
        employees_serializer=EmpSerializer(employees,many=True)
        return JsonResponse(employees_serializer.data,safe=False)
    elif request.method=="POST":
        emp_data=JSONParser().parse(request)
        emp_serializer=EmpSerializer(data=emp_data)
        if emp_serializer.is_valid():
            emp_serializer.save()
            return JsonResponse("Added",safe=False)
        return JsonResponse("Error",safe=False)
    elif request.method=="PUT":
        emp_data=JSONParser().parse(request)
        details=Employees.objects.get(empId=emp_data["empId"])
        emp_serializer=EmpSerializer(details,data=emp_data)
        if emp_serializer.is_valid():
            emp_serializer.save()
            return JsonResponse("Added",safe=False)
        return JsonResponse("Error updating",safe=False)
    elif request.method=="DELETE":
        details=Employees.objects.get(empId=id)
        details.delete()
        return JsonResponse("Deleted",safe=False)

