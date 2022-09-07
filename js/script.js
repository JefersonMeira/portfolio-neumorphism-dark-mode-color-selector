
// INÍCIO: ativar menu
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
// FIM: ativar menu

// INÍCIO: modo noturno
let darkMode = document.querySelector('#dark-mode');

darkMode.onclick = () => {
    
    darkMode.classList.toggle('fa-sun');
    darkMode.classList.toggle('fa-moon');

    if (darkMode.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}
// FIM: modo noturno

// INÍCIO: abrir paleta de cores
let seletorCores = document.querySelector('#cor-destaque-toggler');
let boxCores = document.querySelector('#box-cores');

seletorCores.onclick = () => {
    seletorCores.classList.toggle('active');
    boxCores.classList.toggle('active');
}
// FIM: abrir paleta de cores


// INÍCIO: selecionar cor destaque
let alternarCores = document.querySelectorAll('.alternar-cor');

function setActiveCor(cor){
    alternarCores.forEach((style) => {
        if(cor === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    })
}
// FIM: selecionar cor destaque