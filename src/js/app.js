$(document).ready(function(){

   var textFooter=$("#textFooter");
   var pictJeu=$("#pictJeu")
   var textP=$('#string1');



   $("#btnActive").click(function(e){
      e.preventDefault();
     textFooter.addClass('blue-light');
    
   });

   /*pictJeu.mouseover(function(){
     pictJeu.addClass('left');
     
     console.log('nombre de mousehover');
   });*/

   
    $('#btnP').click(function(e){
        e.preventDefault();  
       console.log(textP.attr('id'));
    });

    $('#verif').click(function(e){
       e.preventDefault();
       
       var span=$('.lead:last').text();
       console.log(span)
    })

    




   //FIN DE JQUERY
});