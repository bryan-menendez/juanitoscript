
var divApi = document.getElementById("divApi");

function getFuqers()
{
    fetch('https://randomuser.me/api/')
    .then(response=> response.json())
    .then(json=>
    {
        console.log(json.results[0]);
        return json.results[0];      
    }).then(user => 
    {
        let divApi = document.getElementById("divApi");
        divApi.innerHTML = 
        `
            <img src="${user.picture.large}" width="100px" class="img-fluid rounded-circle">
            <p>Nombre: ${user.name.first}</p>
        `;
    });
}
