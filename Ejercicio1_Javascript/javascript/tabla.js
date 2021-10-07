
var datos = [
    {
        "nombre": "MARIANO",
        "apellido": "MARCOS",
        "telefono":"9687689",
        "sexo":"hombre",
        "email":"m_de_marcos@gmail.com"
        },{
    "nombre": "MARIA",
    "apellido": "RUIZ",
    "telefono":"666555",
    "sexo":"mujer",
    "email":"mariaruiz@gmail.com"
    },
    {
    
    "nombre": "KARL",
    "apellido": "MARX",
    "telefono":"692323",
    "sexo":"hombre",
    "email":"karlmarx@gmail.com"
    },
    {
    
    "nombre": "BILL",
    "apellido": "GATES",
    "telefono":"6334342",
    "sexo":"hombre",
    "email":"billygadgets@gmail.com"
    },
    {
    
    "nombre": "LOLA",
    "apellido": "LIZ",
    "telefono":"6845784",
    "sexo":"mujer",
    "email":"Lolaliz@gmail.com"
    }
   ];
   
 
   
var d = '<tr>'+ 
'<th>Nombres</th>'+
'<th>Apellidos</th>'+
'<th>Telefono</th>'+
'<th>Sexo</th>'+
'<th>Email</th>'+
'</tr>';
   

function tabla() {
 for (var i = 0; i < datos.length; i++) {
  d+= '<tr>'+
 '<td class="filtro">'+datos[i].nombre+'</td>'+
 '<td class="filtro">'+datos[i].apellido+'</td>'+
 '<td>'+datos[i].telefono+'</td>'+
 '<td>'+datos[i].sexo+'</td>'+
 '<td>'+datos[i].email+'</td>'+
 '<td>'+ '<input type="button" class="x" onclick="borrar(this);" name="x" id="x" value="X"></input>'+'</td>'+
 '</tr>';

 }
 d+= '<tr class="noSearch hide">'+
 '<td colspan="5"></td>'+
 '</tr>';
 document.getElementById("tabla1").innerHTML = d;
 
}

function borrar(v) {
    v.closest('tr').remove();
};

window.onload =  function () {  tabla() }; 
;
function doSearch()
{
    const tableReg = document.getElementById('tabla1');
    const searchText = document.getElementById('searchTerm').value.toLowerCase();
    let total = 0;

    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < tableReg.rows.length; i++) {
        // Si el td tiene la clase "noSearch" no se busca en su cntenido
        if (tableReg.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const cellsOfRow = tableReg.rows[i].getElementsByClassName('filtro');
        // Recorremos todas las celdas
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            
                
                
            if (searchText.length <3 || compareWith.indexOf(searchText) > -1 ) {
                found = true;
                total++;
            }
            
            //A partir de 3 caracteres escritos en el buscador se aplicarán los filtros a la tabla y se buscaran las coincidencias
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
    }

    // mostramos las coincidencias
    const lastTR=tableReg.rows[tableReg.rows.length-1];
    const td=lastTR.querySelector("td");
    lastTR.classList.remove("hide", "red");
    
    if (searchText == "") {
        lastTR.classList.add("hide");
    } else if (total==true && searchText.length>2) {
        td.innerHTML="Se ha encontrado "+total+" coincidencia"+((total>1)?"s":"");
    } else if( total==false){
        lastTR.classList.add("red");
        td.innerHTML="No se han encontrado coincidencias";}
    
}