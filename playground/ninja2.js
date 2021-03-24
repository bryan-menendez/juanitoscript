let fuqs = 'slim to none';
console.log(`the fuqs i give today are ${fuqs}`);

const ul =document.querySelector('.fuqs');

const arr = ['juan', 'roerto', 'periko'];


const greet = (name) => {
    let html = '';

    name.forEach(n => {
        html += '<p>hell0 '+ n + '</p>';
    });

    return html;
}

ul.innerHTML = greet(arr);

var contador = 0;

while(contador == 0)
{
    var valor = prompt("pasa el valor lagi, que sea numero o explota");
    var num = parseInt(valor);

    if(num<21)
    {
        contador++;
        num = num*3;
        num;
    }
    else
    {
        alert("MALO MALO MALO");
    }
}