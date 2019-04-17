$(document).ready(function(){

   var textFooter=$("#textFooter");
   var pictText=$("#pictJeu");

   $("#btnActive").click(function(e){
      e.preventDefault();
     textFooter.addClass('blue-light');
    
   });

   pictJeu.click(function(){
      pictJeu.addClass('right');
      console.log('clique sur mouse hover');
   });
    

  
});