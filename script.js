const btnEncriptar = document.getElementById("encriptador"),
  btnDesencriptar = document.getElementById("desencriptar"),
  textImprimir = document.getElementById("resultado-texto"),
  textIngresado = document.getElementById("text"),
  imagen = document.getElementById("texto-imprime");

const claveEncripitacion = (text) => {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

const claveDesencriptacion = (text) => {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

//boton encriptador
btnEncriptar.addEventListener("click", () => {
  textImprimir.value = claveEncripitacion(textIngresado.value);
  validar();
});

//boton desincraptador

btnDesencriptar.addEventListener("click", () => {
  textImprimir.value = claveDesencriptacion(textIngresado.value);
  validar();
});

function validar() {
  if (textIngresado.value == "") {
    textImprimir.style.display = "none";
  } else {
    imagen.style.display = "none";
    textImprimir.innerHTML = textIngresado.value;
    textImprimir.style.display = "block";
    textIngresado.value = "";
  }
}
