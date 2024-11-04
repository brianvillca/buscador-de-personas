$(document).ready(function(){
    $('#suprimir').click(function () {
        $.ajax({
            url: './C.exterminar.php',
            type: "POST",
            data: {
                nombre: $("#nombre").val(),
            },
            dataType: "HTML",
            success: function (data) {
                console.log(data);
            }
    
        });
    });
    })