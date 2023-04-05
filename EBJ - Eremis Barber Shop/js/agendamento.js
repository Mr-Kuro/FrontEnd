// Pegando os valores que serão adicionados ao input e atribuindo os mesmos a variaveis
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
// Deixando o foco no peso
peso.focus();

//Função para realizar o calculo do imc
function getIMC() {
  // Condicional para saber se os valores adicionados nos campos são valores validos.
  if (
    altura.value < 2.5 &&
    peso.value < 300 &&
    altura.value > 0 &&
    peso.value > 0
  ) {
    // Calculando o imc e atribuindo - o a uma variavel
    let imc = peso.value / (altura.value * altura.value);

    //Fixando as casas decimais em somente duas
    imc = imc.toFixed(2);

    // Limpa os valores digitados para uma nova consulta
    peso.value = "";
    altura.value = "";

    // Adicionando um texto a um elemento vazio para exibir o resultado
    document.querySelector("#result").innerText =
      "Sua situação imc é de " + imc;

    checkIMC(imc);

    // Funcão que analisa os valores do imc e os classifica segundo cada condição fisica
  } else {
    document.querySelector("#result").innerText =
      "Os valores digitados são invalidos!";

    document.querySelector("#info").innerText =
      `Por quê tem uma cauculadora de IMC na página de agendamento?
      Porque o Site é Meu, e faço dele o que quizer :3!`;

    peso.value = "";
    altura.value = "";
  }
}

function checkIMC(imc) {
  let text = "Você esta classificado como ";
  if (imc < 18.5) {
    document.querySelector("#info").innerText = text + "magresa";
  } else if (imc >= 18.5 && imc <= 24.9) {
    document.querySelector("#info").innerText = text + "Normal";
  } else if (imc >= 25.0 && imc <= 29.9) {
    document.querySelector("#info").innerText = text + "Sobrepeso";
  } else if (imc >= 30.0 && imc <= 34.9) {
    document.querySelector("#info").innerText = text + "Obesidade grau I";
  } else if (imc >= 35.0 && imc <= 39.9) {
    document.querySelector("#info").innerText = text + "Obesidade grau II";
  } else if (imc > 40.0) {
    document.querySelector("#info").innerText = text + "Obesidade grau III";
  }
}

// Selecionando o botão
// let button = document.querySelector("button");

//Realizando a chamada do botão e associando o mesmo com o onclick, recebendo a função getIMC
// button.onclick = getIMC;
