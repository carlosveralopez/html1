//debugger;
let datos= [];

  let form = new FormData();
  //form.append( "get", "");
  form.append("id", "");
  fetch("./ws/getUsuario.php", {
    method: "GETT",
    body: form,
  })
    .then((response) => response.text())
    .then((data) => {
      datos= JSON.parse(data).data;
      tabla(datos);
        
     console.log(datos[0]);
    });












    /*let form2 = new FormData();
    //form.append( "get", "");
    form2.append("id", "3");
    form2.append("nombre", "caasdasd");
    form2.append("apellidos", "apelo");
    form2.append("contrasena", "4344");
    form2.append("fecha", "");
    form2.append("email", "");
    form2.append("sexo", "");
    form2.append("telefono", "");
    fetch("./ws/updateUsuario.php", {
      method: "POST",
      body: form2,
    })
      .then((response) => response.text())
      .then((dati) => {
        
          
       console.log(dati);
      });



/*
      let form3 = new FormData();
      //form.append( "get", "");
      form3.append("id", "3");
      fetch("./ws/updateUsuario.php", {
        method: "GETT",
        body: form3,
      })
        .then((response) => response.text())
        .then((dato) => {
          
            
         console.log(dato);
        });*/
        





var d =
  "<tr>" +
  "<th>ID</th>" +
  "<th>Fecha_Nacimiento</th>" +
  "<th>Contraseña</th>" +
  "<th>Nombres</th>" +
  "<th>Apellidos</th>" +
  "<th>Telefono</th>" +
  "<th>Sexo</th>" +
  "<th>Email</th>" +
  "</tr>";

var c ='<nav id=cabecera class="navbar navbar-expand-lg navbar-light ">'+
'<div class="container-fluid">'+
  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon"></span>'+
  '</button>'+
  '<div class="collapse navbar-collapse" id="navbarNav">'+
    '<ul class="navbar-nav">'+
      '<li class="nav-item">'+
      '<a class="nav-link" href="tablas.html">Ejemplo de Tablas</a>'+
      '</li>'+
      '<li class=list class="nav-item">'+
       '<a class="nav-link" href="listados.html">Ejemplo de Listados</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="Untitled-1.html">Ejemplo de Formulario</a>'+
      '</li>'+
      '<li class=forma class="nav-item">'+
        '<a class="nav-link" href="formas.html">Ejemplo de dibujar formas</a>'+
      '</li>'+
      '<li class=imag class="nav-item">'+
      '<a class="nav-link" href="imagenes.html">Ejemplo de imagenes</a>'+
    '</li>'+
    '</ul>'+
  '</div>'+
'</div>'+
'</nav>';
  /*"<div id=cabecera>" +
  "<ul>" +
  '<li class=tabl><a href="tablas.html" target="_blank">Ejemplo de Tablas</a></li>' +
  '<li><a href="listados.html" target="_blank">Ejemplo de Listados</a></li>' +
  '<li class=formu><a href="Untitled-1.html" target="_blank">Ejemplo de Formulario</a></li>' +
  '<li><a href="imagenes.html" target="_blank">Ejemplo de imagenes</a></li>' +
  '<li><a href="formas.html" target="_blank">Ejemplo de dibujar formas</a></li>' +
  "</ul>" +
  "</div>";*/

function barra() {
  document.getElementById("navbar").innerHTML = c;
}

//window.onload =  function () {  barra() };
//;
//console.log(datos);
function tabla(datos) {
  for (var i = 0; i < datos.length; i++) {
    
    d +=
      "<tr>" +
      '<td id="id' +
      i +
      '">' +
      datos[i].id +
      "</td>" +
      '<td id="fec' +
      i +
      '">' +
      datos[i].fecha_nacimiento +
      "</td>" +
      '<td id="con' +
      i +
      '">' +
      datos[i].contrasena +
      "</td>" +
      '<td id="nom' +
      i +
      '" class="filtro">' +
      datos[i].nombre +
      "</td>" +
      '<td id="ape' +
      i +
      '" class="filtro">' +
      datos[i].apellidos +
      "</td>" +
      '<td id="tel' +
      i +
      '">' +
      datos[i].telefono +
      "</td>" +
      '<td id="se' +
      i +
      '">' +
      datos[i].sexo +
      "</td>" +
      '<td id="ema' +
      i +
      '">' +
      datos[i].email +
      "</td>" +
      "<td>" +
      '<button type="button" class="btn btn-primary" onclick="borrar(this,' +
      i +
      ');" name="x" id="x" value="X"><i class="bi bi-x-circle"></i></button>' +
      "</td>" +
      "<td>" +
      '<button type="button" class="btn btn-primary" onclick="modificar(' +
      i +
      ');" name="mod" id="mod" value="Modificar"><i class="bi bi-hammer"></i></button>' +
      "</td>" +
      "</tr>";

    //datos['+i+']
  }
  d += '<tr class="noSearch hide">' + '<td colspan="5"></td>' + "</tr>";
  document.getElementById("tabla1").innerHTML = d;
}

function borrar(v,i) {
  let fd = new FormData();
  //form.append( "get", "");
  fd.append("id", datos[i].id);
  fetch("./ws/deleteUsuario.php", {
    method: "POST",
    body: fd,
  })
    .then((response) => response.text())
    .then((datw) => {
      
        
     console.log(datw);
    });

  v.closest("tr").remove();
  if (document.getElementById("form")) {
    var z = document.getElementById("form");
    padre = z.parentNode;
    padre.removeChild(z);
  }
}
function modificar(v) {
  var m =
 
    '<div id="form" class=form>' +
    '<div class=col>'+
    '<br><label>Fecha_Nacimiento:</label> </div> <div class=col> <input id="f" class=s placeholder="' +
    datos[v].fecha_nacimiento +
    '" autofocus="true" name="nombre"  type="text"> </div> <br>' +
    '<div class=col>'+
    '<label>Contraseña:</label></div> <div class=col><input id="c" class=s placeholder="' +
    datos[v].contrasena +
    '" autofocus="true" name="nombre"  type="text"></div><br>' +
    '<div class=col>'+
    '<label>Nombre:</label></div> <div class=col> <input id="n" class=s placeholder="' +
    datos[v].nombre +
    '" autofocus="true" name="nombre"  type="text"></div><br>' +
    '<div class=col>'+
    '<label>Apellidos:</label></div> <div class=col><input id="a" class=s placeholder="' +
    datos[v].apellidos +
    '" name="apellido"type="text"></div><br>' +
    '<div class=col>'+
    '<label>Email:</label></div> <div class=col><input class=s id="em" placeholder="' +
    datos[v].email +
    '" name="email" type="text"></div><br>' +
    '<div class=col>'+
    '<label>Telefono:</label></div> <div class=col><input class=s id="t" placeholder="' +
    datos[v].telefono +
    '" name="telefono" type="text"></div><br>' +
    '<div class=col>'+
    "<label>Elige el sexo:</label></div> <div class=col>" +
    '<label><input type="radio" class="btn btn-primary" name="sexoo" id="s" value="hombre">Hombre<i class="bi bi-gender-male"></i> </label>' +
    '<label><input type="radio" class="btn btn-primary" id="s" value="mujer"> Mujer<i class="bi bi-gender-female"></i></label><br></div> <div class=col> <br>' +
    '<button type="button" class="btn btn-primary" onclick=" mod(' +
    v +
    ')"><i class="bi bi-check-lg"></i></button></div>' +
    "</div>";
  document.getElementById("modi").innerHTML = m;
}
function mod(v) {
  var memo = document.getElementsByName("sexoo");
  for (i = 0; i < memo.length; i++) {
    if (memo[i].checked) {
      var memory = memo[i];
    }
  }
  if (!document.getElementById("f").value == "") {
    document.getElementById("fec" + v).textContent =
      document.getElementById("f").value;
    datos[v].fecha_nacimiento = document.getElementById("f").value;
  }
  if (!document.getElementById("c").value == "") {
    document.getElementById("con" + v).textContent =
      document.getElementById("c").value;
    datos[v].contrasena = document.getElementById("c").value;
  }
  if (!document.getElementById("n").value == "") {
    document.getElementById("nom" + v).textContent =
      document.getElementById("n").value;
    datos[v].nombre = document.getElementById("n").value;
  }
  if (!document.getElementById("a").value == "") {
    document.getElementById("ape" + v).textContent =
      document.getElementById("a").value;
    datos[v].apellidos = document.getElementById("a").value;
  }
  if (!document.getElementById("t").value == "") {
    document.getElementById("tel" + v).textContent =
      document.getElementById("t").value;
    datos[v].telefono = document.getElementById("t").value;
  }
  if (!document.getElementById("em").value == "") {
    document.getElementById("ema" + v).textContent =
      document.getElementById("em").value;
    datos[v].email = document.getElementById("em").value;
  }
  if (!memory == "") {
    document.getElementById("se" + v).textContent = memory.value;
    datos[v].sexo = memory.value;
  }

    let form2 = new FormData();
    //form.append( "get", "");
    form2.append("id", "3");
    form2.append("nombre", datos[v].nombre);
    form2.append("apellidos", datos[v].apellidos);
    form2.append("passwd", datos[v].contrasena );
    form2.append("fecha", datos[v].fecha_nacimiento);
    form2.append("email", datos[v].email);
    form2.append("sexo", datos[v].sexo);
    form2.append("tlf", datos[v].telefono);
    fetch("./ws/updateUsuario.php", {
      method: "POST",
      body: form2,
    })
      .then((response) => response.text())
      .then((dati) => {
        
          
       console.log(dati);
      });
  var z = document.getElementById("form");
  padre = z.parentNode;
  padre.removeChild(z);
}

window.onload = function () {
  tabla(datos), barra();
};
function doSearch() {
  const tableReg = document.getElementById("tabla1");
  const searchText = document.getElementById("searchTerm").value.toLowerCase();
  let total = 0;

  // Recorremos todas las filas con contenido de la tabla
  for (let i = 1; i < tableReg.rows.length; i++) {
    // Si el td tiene la clase "noSearch" no se busca en su cntenido
    if (tableReg.rows[i].classList.contains("noSearch")) {
      continue;
    }

    let found = false;
    const cellsOfRow = tableReg.rows[i].getElementsByClassName("filtro");
    // Recorremos todas las celdas
    for (let j = 0; j < cellsOfRow.length && !found; j++) {
      const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
      // Buscamos el texto en el contenido de la celda

      if (searchText.length < 3 || compareWith.indexOf(searchText) > -1) {
        found = true;
        total++;
      }

      //A partir de 3 caracteres escritos en el buscador se aplicarán los filtros a la tabla y se buscaran las coincidencias
    }
    if (found) {
      tableReg.rows[i].style.display = "";
    } else {
      // si no ha encontrado ninguna coincidencia, esconde la
      // fila de la tabla
      tableReg.rows[i].style.display = "none";
    }
  }

  // mostramos las coincidencias

  const lastTR = tableReg.rows[tableReg.rows.length - 1];
  const td = lastTR.querySelector("td");
  lastTR.classList.remove("hide", "red");

  if (searchText == "") {
    lastTR.classList.add("hide");
  } else if (total == true && searchText.length > 2) {
    td.innerHTML =
      "Se ha encontrado " + total + " coincidencia" + (total > 1 ? "s" : "");
  } else if (total == false) {
    lastTR.classList.add("red");
    td.innerHTML = "No se han encontrado coincidencias";
  }
}
