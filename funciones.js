$(Idbusca).click(function(){
$.ajax({
    url:'./buscar.php',
    type:'POST',
    data:{apellido: $("#nom").val()},
    datatype:"json",
    success: function(dato){
        console.log(dato)
    }
})
})