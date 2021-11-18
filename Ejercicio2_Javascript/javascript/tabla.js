debugger;
/*function listar() {
  let form = new FormData();
  //form.append( "get", "");
  form.append("id", "");
  fetch("WS/getUsuario.php", {
    method: "POST",
    body: form,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
}*/
var datos = [
  {
    nombre: "MARIANO",
    apellido: "MARCOS",
    telefono: "9687689",
    sexo: "hombre",
    email: "m_de_marcos@gmail.com",
  },
  {
    nombre: "MARIA",
    apellido: "RUIZ",
    telefono: "666555",
    sexo: "mujer",
    email: "mariaruiz@gmail.com",
  },
  {
    nombre: "KARL",
    apellido: "MARX",
    telefono: "692323",
    sexo: "hombre",
    email: "karlmarx@gmail.com",
  },
  {
    nombre: "BILL",
    apellido: "GATES",
    telefono: "6334342",
    sexo: "hombre",
    email: "billygadgets@gmail.com",
  },
  {
    nombre: "LOLA",
    apellido: "LIZ",
    telefono: "6845784",
    sexo: "mujer",
    email: "Lolaliz@gmail.com",
  },
];

var d =
  "<tr>" +
  "<th>Nombres</th>" +
  "<th>Apellidos</th>" +
  "<th>Telefono</th>" +
  "<th>Sexo</th>" +
  "<th>Email</th>" +
  "</tr>";

var c =
  "<div id=cabecera>" +
  "<ul>" +
  '<li class=tabl><a href="tablas.html" target="_blank">Ejemplo de Tablas</a></li>' +
  '<li><a href="listados.html" target="_blank">Ejemplo de Listados</a></li>' +
  '<li class=formu><a href="Untitled-1.html" target="_blank">Ejemplo de Formulario</a></li>' +
  '<li><a href="imagenes.html" target="_blank">Ejemplo de imagenes</a></li>' +
  '<li><a href="formas.html" target="_blank">Ejemplo de dibujar formas</a></li>' +
  "</ul>" +
  "</div>";

function barra() {
  document.getElementById("navbar").innerHTML = c;
}

//window.onload =  function () {  barra() };
//;

function tabla() {
  for (var i = 0; i < datos.length; i++) {
    d +=
      "<tr>" +
      '<td id="nom' +
      i +
      '" class="filtro">' +
      datos[i].nombre +
      "</td>" +
      '<td id="ape' +
      i +
      '" class="filtro">' +
      datos[i].apellido +
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
      '<input type="button" class="x" onclick="borrar(this);" name="x" id="x" value="X"></input>' +
      "</td>" +
      "<td>" +
      '<input type="button" class="x" onclick="modificar(' +
      i +
      ');" name="mod" id="mod" value="Modificar"></input>' +
      "</td>" +
      "</tr>";

    //datos['+i+']
  }
  d += '<tr class="noSearch hide">' + '<td colspan="5"></td>' + "</tr>";
  document.getElementById("tabla1").innerHTML = d;
}

function borrar(v) {
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
    '<label>Nombre:</label><input id="n" class=s placeholder="' +
    datos[v].nombre +
    '" autofocus="true" name="nombre"  type="text"><br><br>' +
    '<label>Apellidos:</label><input id="a" class=s placeholder="' +
    datos[v].apellido +
    '" name="apellido"type="text"><br><br>' +
    '<label>Email:</label><input class=s id="em" placeholder="' +
    datos[v].email +
    '" name="email" type="text"><br><br>' +
    '<label>Telefono:</label><input class=s id="t" placeholder="' +
    datos[v].telefono +
    '" name="telefono" type="text"><br><br>' +
    "<label>Elige el sexo:</label>" +
    '<label><input type="radio" class=s name="sexoo" id="s" value="hombre"> Hombre</label>' +
    '<label><input type="radio" class=s name="sexoo" id="s" value="mujer"> Mujer</label><br>' +
    '<input type="button" class=buton value="guardar" onclick=" mod(' +
    v +
    ')"></input>' +
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
  if (!document.getElementById("n").value == "") {
    document.getElementById("nom" + v).textContent =
      document.getElementById("n").value;
    datos[v].nombre = document.getElementById("n").value;
  }
  if (!document.getElementById("a").value == "") {
    document.getElementById("ape" + v).textContent =
      document.getElementById("a").value;
    datos[v].apellido = document.getElementById("a").value;
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

  var z = document.getElementById("form");
  padre = z.parentNode;
  padre.removeChild(z);
}

window.onload = function () {
  tabla(), barra(), listar();
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
