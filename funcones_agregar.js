$(document).ready(function(){
$('#guardar').click(function () {
    $.ajax({
        url: './C.añadir.php',
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