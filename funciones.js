$('#Idbusca').click(function(){
$.ajax({
    url:'./buscar.php',
    type:'POST',
    data:{nombre: $("#nom").val()},
    datatype:"json",
    success: function(dato){
        console.log(dato);
        $('#info').html(dato);
        const data = JSON.parse(dato);
        let html = "";
        if (data.length === 0) {
            html = '<p>No se encontraron resultados.</p>';
        } else {
            data.forEach(function(item) {
                html += `<p>se encontro a la persona ${item.nombre} ${item.apellido}</p>`;
            });
        }
        $('#info').html(html);
    }
});
});
$('#per').click(function() {
    $.ajax({
        url: './inforpersonas.php',
        type: 'GET',
        dataType: "json",
        success: function(data) {
            console.log(data);
            let html = "<table border='1'><th>Nombre</th><th>Apellido</th></tr>";
            data.forEach(function(alumno) {
                html += `</td><td>${alumno.nombre}</td><td>${alumno.apellido}</td></tr>`;
            });
            html += "</table>";
            $("#nota").html(html);
        }
    });
});

