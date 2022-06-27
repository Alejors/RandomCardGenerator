window.onload = function () {
  //FUNCION PARA NUMERO
  var valor = document.querySelector('.center');
  var number = Math.floor(Math.random() * 13 + 1);
  if (number == 13) {
    let K = document.createTextNode('K');
    valor.appendChild(K);
  }
  else if (number == 12) {
    let Q = document.createTextNode('Q');
    valor.appendChild(Q);
  }
  else if (number == 11) {
    let J = document.createTextNode('J');
    valor.appendChild(J);
  }
  else if (number == 1) {
    let A = document.createTextNode('A');
    valor.appendChild(A);
  }
  else {
    let text = document.createTextNode(`${number}`);
    valor.appendChild(text);
  }
  //FUNCION PARA PINTA
  var pinta = document.getElementsByClassName('suit');
  console.log(pinta);
  let selectorpinta = Math.floor(Math.random() * 4);
  console.log(selectorpinta);
  if (selectorpinta == 0 || selectorpinta == 1) {
    document.querySelector('.center').style.color = 'red';
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
}