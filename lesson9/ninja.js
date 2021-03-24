$(document).ready(function () {
    let nombre = $("#nombre");
    let eco = $("#eco");

    nombre.keyup(function () { 
        eco.html(nombre.val());
    });

    let resultado = $("#resultado");

    $("#btnMostrar").click(function()
    {
        resultado.show(1000);
    });

    $("#btnOcultar").click(function()
    {
        resultado.hide(1000);
    });

    $("#btnToggle").click(function()
    {
        resultado.toggle(1000);
    });
});