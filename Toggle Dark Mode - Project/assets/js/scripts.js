/*
const body = document.getElementsByTagName(body);
const h1 = document.getElementsByTagName(h1);
const footer = document.getElementsByTagName(footer);
const button = document.getElementsByTagName(button);
const buttoon_name = document.getElementById("mode-selector");

const botao = document.getElementById('mode-selector');
botao.addEventListener('click', ativadarDarkOuLigthMode(button, body, h1, footer, buttoon_name));

function ativadarDarkOuLigthMode(button, body, h1, footer, btn_name) {
    if(buttoon_name === 'Dark Mode') {
        body.classList.add("dadark-mode;


    }


}
*/


function changeMode() {
    console.log('cliquei');

    changeClasses();
    changetexts();

};

function changetexts() {
    const ligthMode = 'Ligth Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    };


    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + ' ON';

};

function changeClasses() {
    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
};

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode'

// console.log(body); // retorna uma lista
// console.log(body[0]); // retorna uma lista0 elemento body


// console.log(button);
button.addEventListener("click", changeMode);

