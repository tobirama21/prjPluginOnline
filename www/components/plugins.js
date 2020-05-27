
$(document).on("click","#alerta",function(){
   navigator.notification.alert("Minha Mensagem",null,"Aviso!!","Aceito");
});
$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
  navigator.notification.alert(buttonIndex);
    if(buttonIndex=="1"){
       navigator.notification.alert("Esoclheu a opção A")
    }else{
    navigator.notification.alert("Escolheu a opção B")
    }

  }
  navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",["A","B"]);
});
$(document).on("click","#beep",function(){
   navigator.notification.beep(3);
});
$(document).on("click","#vibrar",function(){
   navigator.vibrate(4000);
});
  function mostrarMapa(lat,long){
     L.mapquest.key = '	aCS6de66YoFxnLQzaoKNL3X65tLFp5yg';
     L.mapquest.geocoding().geocode('Itanhaém, BR', createMap);


        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
          
        });
  }

  
$(document).on("click","#local",function(){
     var onSuccess = function(position) {
       mostrarMapa( position.coords.latitude, position.coords.longitude)
     };
    function onError(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});