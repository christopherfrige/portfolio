// Função genérica para inicializar a escrita progressiva em determinado elemento
function setProgressiveWriting(elementSelector) {
  const element = document.querySelector(elementSelector)
  const arrayText = element.innerHTML.split("");
  element.innerHTML = " ";

  arrayText.forEach(function (letra, i) {
    setTimeout(function () {
      element.innerHTML += letra;
    }, 50 * i);
  });
}

// Função de inicialização da escrita progressiva
export function startProgressiveWriting() {
  setProgressiveWriting(".progressivewriting")
}