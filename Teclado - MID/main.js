function tocaSom(seletorAudio) {
  const ELEMENTO = document.querySelector(seletorAudio);

  if (ELEMENTO && ELEMENTO.localName === 'audio') {
    ELEMENTO.play();
  } else {
    console.log("Elemento não encontrado ou Seletor inválido")
  }
}

const LISTA_TECLAS = document.querySelectorAll(".tecla");

for (let i = 0; i < LISTA_TECLAS.length; i++) {
  const TECLA = LISTA_TECLAS[i];
  const INSTRUMENTO = TECLA.classList[1];
  const ID_AUDIO = `#som_${TECLA.classList[1]}`;

  TECLA.onclick = function () {
    tocaSom(ID_AUDIO);
  };

  TECLA.onkeydown = function (evento) {
    if(evento.code === 'Space' || evento.code === 'Enter')
    TECLA.classList.add('ativa');
  } 

  TECLA.onkeyup = function (){
    TECLA.classList.remove('ativa');
  }
}
