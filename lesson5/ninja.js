var array = ['doc doc doc', 42, false,  true];
console.log(array);

var objetoide = {
    nombre : 'objeto feo',
    razon : 'sin pecado original',
    estado : 'redi',
    hijos : {
        hijo1 : 'roerto',
        hijo2 : 'losko'
    }
}
console.log(objetoide.razon);
console.log(objetoide.hijos.hijo2);

var arrayObjetos = [
    {
        nombre: 'objeto chano'
    },
    {
        nombre: 'objeto nichano'
    },
    {
        nombre: 'help me ma friend'
    }
];

var divMoney = document.getElementById("divMoney"); 
arrayObjetos.forEach(e => {
    divMoney.innerHTML += (e.nombre + '<br>');
});

