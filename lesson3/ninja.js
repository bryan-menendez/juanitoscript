let user = {
    name: 'olo',
    books: ['lokel viento c llevo', 'la beztia'],
    login: function(){
        console.log('user logged in');
    },
    //arrow functions fuq up what "this" means
    printBooks: function(){
        this.books.forEach(element => {
            console.log('booksie: '+ element);
        });
        
    }

};

let dogz = [
    {name:'doggo', age:24},
    {name:'doggarette', age:99}
];

function printDogs(dogs)
{
    dogs.forEach(dog => {
        console.log('dog is called '+ dog.name + ' and is '+dog.age+' years old');
    });
}

user.printBooks();
printDogs(dogz);