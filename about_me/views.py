
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AboutMe
from .serializers import AboutMeSerializer



# Create your views here.


class AboutMeView(APIView):
    def post(self, request, format=None):
        
        qs = AboutMe.objects.all()     
        serializer = AboutMeSerializer(qs, many=True)
        print(serializer.data[0])
        for i in serializer.data[0]:
            print(i) 
        return Response(serializer.data)
       