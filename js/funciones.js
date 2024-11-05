$(document).ready(function () {
    $('#Idbusca').click(function () {
        $.ajax({
            url: './consultas/C.buscar.php',
            type: 'POST',
            data: { nombre: $("#nom").val() },
            datatype: "json",
            success: function (dato) {
                console.log(dato);
                $('#info').html(dato);
                const data = JSON.parse(dato);
                let html = "<table border='1'><th>Nombre</th><th>Apellido</th></tr>";
                if (data.length === 0) {
                    html = '<p>No se encontraron resultados.</p>';
                } 
                else if(data.length > 1){
                    html +='<p> se encontraron varias personas.</p>';
                    data.forEach(function (item) {
                        html += `</td><td>${item.nombre}</td><td> ${item.apellido}</td></tr>`;
                    });
                    html += "</table>";
                }
                else {
                    html +='<p> se encontro a la persona.</p>';
                    data.forEach(function (item) {
                        html += `</td><td>${item.nombre}</td><td> ${item.apellido}</td></tr>`;
                    });
                    html += "</table>";
                }
                $('#info').html(html);
            }
        });
    });
    $('#per').click(function () {
        $.ajax({
            url: './consultas/C.inforpersonas.php',
            type: 'GET',
            dataType: "json",
            success: function (data) {
                console.log(data);
                let html = "<table border='1'><th>Nombre</th><th>Apellido</th></tr>";
                data.forEach(function (alumno) {
                    html += `</td><td>${alumno.nombre}</td><td>${alumno.apellido}</td></tr>`;
                });
                html += "</table>";
                $("#nota").html(html);
            }
        });
    });
    $('#agregar').click(function () {
        $.ajax({
            url: './formularios/agregar.php',
            dataType: "HTML",
            success: function (h) {
                $('#aña').html(h)
            }
        });

    });
    $('#guardar').click(function () {
        $.ajax({
            url: './formularios/añadir.php',
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
    $('#borrar').click(function(){
        $.ajax({
            url:'./formularios/eliminar.php',
            dataType:'HTML',
            success:function(jhonnydea){
            $('#quitar').html(jhonnydea)
            }
        })
    });
    $('#modificar').click(function(){
        $.ajax({
            url:'./formularios/modifi.php',
            dataType:'HTML',
            success:function(modicasaio){
                $('#modi').html(modicasaio)
            }
        })
    });
})
