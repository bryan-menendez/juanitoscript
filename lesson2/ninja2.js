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