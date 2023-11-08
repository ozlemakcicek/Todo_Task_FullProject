from rest_framework import serializers
from .models import ToDoItem, TaskGroup


class TodoItemSerializer(serializers.ModelSerializer):
    due_date = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    group_name = serializers.StringRelatedField(source="group")  # We added a new field "group_name", it's used to provide a more user-friendly representation of the related model.
    
    
    class Meta:                  # cevuirmek istedigimiz alanlar i Meta nin altinda yaziyoruz.model kismina , models de yazdigin ve cevirmek istedigin alani yaz, fields de ise hepsini cevir bu modelin alanlarinin diyoruz
        model=ToDoItem
        fields=("__all__")

class TaskGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model=TaskGroup
        fields=("__all__")

# hicbir degisiklik yapmak istemezsek sadece class Meta yazip model isimlerini yaziyoruz.ikincisinde oldugu gibi.ilkinde degisiklik ve ekleme yaptik


