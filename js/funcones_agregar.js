$(document).ready(function(){
$('#guardar').click(function () {
    $.ajax({
        url: './consultas/C.añadir.php',
        type: "POST",
        data: {
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
        },
                success: (response) => {
            console.log(response);
            response === "exists" ?
            console.log("usuario encontrado, por lo tanto no sera agregado") : 
            response !== "exists" ? console.log("usuario no encontrado, por lo tanto sera subido a la base de datos") 
            : console.log("ERROR");
        }

    });
});
})