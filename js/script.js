const formasProibidasContainer = document.getElementById("container");
const formasProibidasContainerDois = document.getElementById("containerDois");
const dica = document.getElementById("dica");
const fechar = document.getElementById("fecharPopup");
const popup = document.getElementById("popup");
const cover = document.getElementById("cover");


document.addEventListener('DOMContentLoaded', (event) => {
    checarforma();
});

dica.addEventListener("click", () =>{
    popup.style.display = "flex";
    cover.style.display = "flex";
    document.documentElement.style.overflow = "hidden"
})

fechar.addEventListener("click", () =>{
    popup.style.display = "none";
    cover.style.display = "none";
    document.documentElement.style.overflow = "auto"
})

const achou = document.getElementById("achou");

achou.addEventListener("click", () =>{
    formasProibidas = localStorage.setItem("formasProibidas", 1)
    checarforma();
})

function checarforma(){
    let formasProibidas = localStorage.getItem("formasProibidas");
    if(formasProibidas != null){
        formasProibidasContainerDois.style.display ="flex";
        formasProibidasContainer.style.display ="none";
    }else{
        formasProibidasContainerDois.style.display ="none";
        formasProibidasContainer.style.display ="flex";
    }
}