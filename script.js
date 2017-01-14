$(document).ready(function() {

  //first: get geolocation for the user
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var posLat = position.coords.latitude;
    var posLon = position.coords.longitude;
    //second: pass the coordinates on to the API call
    $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+posLat+"&lon="+posLon+"&APPID=9a9929beb52dde7cd7bb5ca68d491636", function(data){
      console.log(data.name);
      $("data").html("City" + data.name);
      
   
      
    }); //endOfGetJSON
    
  });//endOfGetCurrentPos
}//endof If

 
  
  
  
  
  
}); //end of document ready
