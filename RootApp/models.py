from django.db import models

# Create your models here.
class Departments(models.Model):
    deptID=models.AutoField(primary_key=True)
    deptName=models.CharField(max_length=100)
class Employees(models.Model):
    empId=models.AutoField(primary_key=True)
    empName=models.CharField(max_length=100)
    dateJoin=models.DateField()
    department=models.CharField(max_length=100)
    # imageFileName=models.CharField(max_length=100)
class Usermodel(models.Model):
    userId=models.AutoField(primary_key=True)
    userName=models.CharField(max_length=100)
    userPass=models.CharField(max_length=1000)

