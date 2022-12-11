// aplicando o objeto date para a varável dia
let dia = new Date();

// guardando os elementos da DOM em variáveis
const texto = document.getElementById("txt");
const imagem = document.querySelector("img#img");
const background = document.getElementById("main");

if (dia.getHours() >= 0 && dia.getHours() <= 12) {
  texto.innerHTML = `Bom dia! São ${dia.getHours()}hrs.`;
} else if (dia.getHours >= 13 || dia.getHours() <= 18) {
  texto.innerHTML = `Boa tarde! São ${dia.getHours()}hrs.`;
  imagem.src = "./img/tarde.jpg";
  background.style.backgroundColor = "#FF744B";
} else if (dia.getHours() >= 19 || dia.getHours() <= 00) {
  texto.innerHTML = `Boa noite! São ${dia.getHours()}hrs.`;
  imagem.src = "./img/noite.jpg";
  background.style.backgroundColor = "#222267";
  background.style.color = "darkgrey";
} else {
  texto.innerHTML = "Hora inválida!!";
}
