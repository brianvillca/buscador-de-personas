$(document).ready(function(){
    $('#guardas').click(function(){
        $.ajax({
            url: './consultas/C.modafi.php',
            type:"POST",
            data:{
                nombre: $("#nombre").val(),
                apellido: $("#apellido").val(),
                nuvnombre: $("#nuvnombre").val(),
                nuvapellido:$("#nuvapellido").val(),
            },
            succes:function(dati){
                console.log(dati);
                alert(dati);
            }
        });
    });
})