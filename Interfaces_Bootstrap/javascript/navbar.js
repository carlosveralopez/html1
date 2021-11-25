


var c = '<nav id=cabecera class="navbar navbar-expand-lg navbar-light ">'+
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
'</nav>'/*'<div id=cabecera>'+ 
'<ul>'+
'<li class=tabl><a href="tablas.html" target="_blank">Ejemplo de Tablas</a></li>'+
'<li class=list><a href="listados.html" target="_blank">Ejemplo de Listados</a></li>'+
'<li class=formu><a href="Untitled-1.html" target="_blank">Ejemplo de Formulario</a></li>'+
'<li class=imag><a href="imagenes.html" target="_blank">Ejemplo de imagenes</a></li>'+
'<li class=forma><a href="formas.html" target="_blank">Ejemplo de dibujar formas</a></li>'+
'</ul>'+
'</div>';*/
   

function barra() {
 document.getElementById("navbar").innerHTML = c;
 }

window.onload =  function () {  barra() }; 
;

