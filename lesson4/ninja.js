var h1_titulo = document.getElementById("titulo");
console.log(h1_titulo.innerHTML); 
h1_titulo.innerHTML = "NO PASA NA SOSIO";
h1_titulo.style.color = "purple";
h1_titulo.style.background = "gray";

var btnApretame = document.getElementById("btnApretame");

btnApretame.onclick = function(){
    btnApretame.className = "btn btn-warning";
    btnApretame.innerHTML = "JAJAJA CAISTE EN LA TRAMPA WERITO"
}

function doNotTouch(){
    let touchable = document.getElementById("touchable");

    for(let i = 0; i < 20; i++)
    {
        touchable.innerHTML  += "KBOOOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMM <BR>";
    }
}

var parrafoides = document.getElementsByClassName("lead");
var parrafoidos = document.querySelectorAll('p');

var btnSolitario = document.getElementById("btnSolitario");
btnSolitario.addEventListener('click', function()
{
    btnSolitario.innerHTML = "NOOOOOOOOOOO";
});

btnSolitario.addEventListener('mouseover', function()
{
    btnSolitario.innerHTML = "ALEJATE";
});

btnSolitario.addEventListener('mouseout', function()
{
    btnSolitario.innerHTML = "RAJA DE ACA DEMONIO";
});