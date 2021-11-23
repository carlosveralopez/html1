


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




function crear(){
    
    var memo = document.getElementsByName("sexo");
    for (i = 0; i < memo.length; i++) {
      if (memo[i].checked) {
        var memory = memo[i];
      }
    }
    
let n = document.getElementById('nombre').value;
let c = document.getElementById('passwd').value;
let a = document.getElementById('apellidos').value;
let f = document.getElementById('fecha').value;
let t = document.getElementById('telefono').value;
let e = document.getElementById('email').value;

let form = new FormData();
  //form.append( "get", "");
  form.append("nombre", n);
    form.append("apellidos", a);
    form.append("passwd", c);
    form.append("fecha", f);
    form.append("email", e);
    form.append("sexo", memory);
    form.append("tlf", t);
  fetch("./ws/crearUsuario2.php", {
    method: "POST",
    body: form,
  })
    .then((response) => response.text())
    .then((data) => {
      
        
     console.log(data);
    });
}