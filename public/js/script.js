$(document).ready(function(){
    $(".hiddenSelect").change(function(){ 
      $(this).nextAll(".visibleInput").val($(this).val());
    });
});