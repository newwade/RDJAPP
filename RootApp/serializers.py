from rest_framework import serializers
from .models import Departments,Employees,Usermodel


class DeptSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departments
        fields=(
            "deptID","deptName"
        )


class EmpSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employees
        fields=(
            "empId","empName","dateJoin","department"
        )
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usermodel
        fields=(
            "userId","userName","userPass"
        )