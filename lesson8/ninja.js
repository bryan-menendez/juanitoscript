$(document).ready(function () {
    $("h1").html('editao con juanitoscript cueri'); //tag
    $(".display-4").html("reeditao con juanito clasico"); //from class
    $("#lorem").html("CON EL PODER DE LAS ID");

    $("#modX p").html("subrayao destakao"); //inner objects
    $("#modX p:first").html("desterrao"); //inner object

    $("#lorem").addClass("text-danger");
    //$("#lorem").removeClass("text-danger");
    
    $("#modY").append("<h1>agregao</h1>");
    $("#modY").prepend("<h1>agregao despues</h1>");
   
    $("#modYnombre").css("color", "red");
    $("#modYnombre").css({background: "blue", padding: '20px' });
    $("#modYdelete").remove();
    $("#modYhidden").hide();

    $("#modYimg").attr('src', 'lucybellmagnetico.jpg');

    $('#btnAgregar').click(function()
    {
        let p = $('#resultado p');        
        p.addClass("display-4");
        p.html("agregao");
    });
    
    $('#btnDeletear').click(function()
    {
        let p = $('#resultado p');        
        p.removeClass("display-4");
        p.html("deleteao");
    });

    $('#btnTogglear').click(function()
    {
        let p = $('#resultado p');        
        p.toggleClass("display-4");
        p.html("toggleao");
    });
});