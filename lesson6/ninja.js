var divApi = document.getElementById("divApi");

function getFuqers()
{
    fetch('ola.txt')
    .then(data=> data.text())
    .then(data=>
        {
            divApi.innerHTML += data 
        })
}
