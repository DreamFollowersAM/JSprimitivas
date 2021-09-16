var cuestionario = {
    preguntas: [
      "¿que dispositivo prefieres?",
      "¿para que lo utilizas principalmente?",
      "¿has recibido alguna capacitacion de cómo usarlos?",
      "¿te gustaria recibir algun curso?",
      "¿con que frecuencia los usas en esta pandemia?"
    ],
    respuestas: [
      "","","","",""
    ]
  };

  for(var i = 1; i < 6; i++){
    document.getElementById(("p"+i)).innerHTML = cuestionario.preguntas[i-1];
  }

function crearCajas() {
  var num = parseInt(document.getElementById("num").value);
  var px = parseInt(document.getElementById("px").value);
  var border = document.getElementById("border").value;
  var clr = document.getElementById("clr").value;

  if(num < 1){
      num = 1;
      document.getElementById("num").value = num
  }
  if(px < 1){
    px = 1;
    document.getElementById("px").value = px
    }

  var res = "";

  for (var i = 0; i < num; i++) {
    res +=
      '<article style="width: 40px; height: 70px; margin: 15px; border: ' +
      px +
      "px " +
      border +
      " " +
      clr +
      '; "></article>';
  }

  document.getElementById("ej1").innerHTML = res;
}

function verResumen() {
    var resm = "";
    for(var i = 1; i < 6; i++){
        cuestionario.respuestas[i-1] = document.getElementById(("r"+i)).value;
        resm += cuestionario.preguntas[i-1]+" rspuesta: "+cuestionario.respuestas[i-1]+"<br>";
    }

    document.getElementById("resmn").innerHTML = resm;
}
