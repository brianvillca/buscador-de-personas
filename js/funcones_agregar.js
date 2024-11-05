$(document).ready(function(){
$('#guardar').click(function () {
    $.ajax({
        url: './consultas/C.añadir.php',
        type: "POST",
        data: {
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
        },
        dataType: "HTML",
        success: function (data) {
            console.log(data);
        }

    });
});
})