var contador = 0;

function getnumber() {
  let number = Math.floor(Math.random() * 13 + 1);
  if (number == 13) {
    let K = document.createTextNode('K');
    return K;
  }
  else if (number == 12) {
    let Q = document.createTextNode('Q');
    return Q;
  }
  else if (number == 11) {
    let J = document.createTextNode('J');
    return J;
  }
  else if (number == 1) {
    let A = document.createTextNode('A');
    return A;
  }
  else {
    let text = document.createTextNode(`${number}`);
    return text;
  }
}

window.onload = function () {
  console.log(contador);
  //FUNCION PARA NUMERO
  let valor = document.querySelector('#center');
  valor.appendChild(getnumber());

  //FUNCION PARA PINTA
  var pinta = document.querySelectorAll('.suit');
  let selectorpinta = Math.floor(Math.random() * 4);

  if (selectorpinta == 0 || selectorpinta == 1) {
    document.querySelector('#center').style.color = 'red';
    if (selectorpinta == 0) {
      for (var i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♥';
        pinta[i].style.color = "red";
      }
    }
    else {
      for (var i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♦';
        pinta[i].style.color = 'red';
      }
    }
  }
  else if (selectorpinta == 2) {
    for (var i = 0; i < pinta.length; i++) {
      pinta[i].innerHTML = '♠';
    }
  }
  else {
    for (var i = 0; i < pinta.length; i++) {
      pinta[i].innerHTML = '♣';
    }
  };

  //BOTON NUEVA CARTA
  var boton = document.getElementById("boton");
  boton.addEventListener('click', (e) => {
    contador++;
    console.log(`contador:${contador}`);

    var cuerpo = document.querySelector('.row');
    let nuevacarta = document.createElement("div");
    nuevacarta.classList.add("carta", "col-6");
    let top = document.createElement("div");
    top.classList.add(`suit${contador}`);
    top.setAttribute("id", "top")
    nuevacarta.appendChild(top);
    let mid = document.createElement("div");
    mid.setAttribute("id", `center${contador}`);
    nuevacarta.appendChild(mid);
    let btm = document.createElement("div");
    btm.classList.add(`suit${contador}`);
    btm.setAttribute("id", "bottom")
    nuevacarta.appendChild(btm);
    cuerpo.appendChild(nuevacarta);

    //DAR NUMERO A LA CARTA NUEVA
    var valor1 = document.getElementById(`center${contador}`);
    valor1.appendChild(getnumber());

    //FUNCION PARA PINTA
    var pinta = document.querySelectorAll(`.suit${contador}`);
    let selectorpinta = Math.floor(Math.random() * 4);
    if (selectorpinta == 0 || selectorpinta == 1) {
      document.querySelector(`#center${contador}`).style.color = 'red';
      if (selectorpinta == 0) {
        for (var i = 0; i < pinta.length; i++) {
          pinta[i].innerHTML = '♥';
          pinta[i].style.color = "red";
        }
      }
      else {
        for (var i = 0; i < pinta.length; i++) {
          pinta[i].innerHTML = '♦';
          pinta[i].style.color = 'red';
        }
      }
    }
    else if (selectorpinta == 2) {
      for (var i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♠';
      }
    }
    else {
      for (var i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♣';
      }
    };
  });



  //CAMBIO DE MEDIDAS CARTA
  var ancho = document.getElementById("width");
  var carta = document.querySelector(".carta");
  ancho.addEventListener("change", (e) => {
    if (ancho.value != '') {
      parseInt(ancho);
      carta.style.width = ancho + 'px';
      ancho.value = "";
    }
  });




}