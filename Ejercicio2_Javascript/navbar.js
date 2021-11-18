


var c = '<div id=cabecera>'+ 
'<ul>'+
'<li class=tabl><a href="tablas.html" target="_blank">Ejemplo de Tablas</a></li>'+
'<li class=list><a href="listados.html" target="_blank">Ejemplo de Listados</a></li>'+
'<li class=formu><a href="Untitled-1.html" target="_blank">Ejemplo de Formulario</a></li>'+
'<li class=imag><a href="imagenes.html" target="_blank">Ejemplo de imagenes</a></li>'+
'<li class=forma><a href="formas.html" target="_blank">Ejemplo de dibujar formas</a></li>'+
'</ul>'+
'</div>';
   

function barra() {
 document.getElementById("navbar").innerHTML = c;
 }

window.onload =  function () {  barra() }; 
;
