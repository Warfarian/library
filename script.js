const myLibrary = [
    new Book("Lord of the rings", "J.R.R Tolkien",  "122 pages"),
    new Book("Naked Lunch", "J.A.Bayona", "164 pages"),
    new Book("A Song of Ice and Fire", "George R.R Martin", "435 pages")
];

function Book(name,author,length){
    this.name = name;
    this.author = author;
    this.length = length;
}

let submit = document.querySelector('#submit');
submit.addEventListener('click',function addBookToLibrary(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let length = document.getElementById('length').value;
    let addedBook = new Book(name,author,length);
    myLibrary.push(addedBook);
    appendBookToDOM(addedBook);
});

const display = document.querySelector('.display');

function displayLibrary(){
    for (let i =0; i<myLibrary.length; i++){
        appendBookToDOM(myLibrary[i]);
    }
}

function appendBookToDOM(book){
    const cards = document.createElement('div');
    cards.innerHTML = `Name: ${book.name} , Author: ${book.author} , Length: ${book.length}`;
    display.appendChild(cards);
}

window.onload = displayLibrary;