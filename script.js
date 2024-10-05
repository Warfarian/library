const myLibrary = [
    new Book("Lord of the rings", "J.R.R Tolkien",  "122 pages", "read"),
    new Book("Naked Lunch", "J.A.Bayona", "164 pages","unread"),
    new Book("A Song of Ice and Fire", "George R.R Martin", "435 pages","read")
];

function Book(name,author,length,status){
    this.name = name;
    this.author = author;
    this.length = length;
    this.status = status;
}


let submit = document.querySelector('#submit');
submit.addEventListener('click',function addBookToLibrary(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let length = document.getElementById('length').value;
    let readStatus = document.querySelector("input[type='radio']:checked").value;
    if (readStatus === "read"){
        let addedBook = new Book(name,author,length,'read');
        myLibrary.push(addedBook);
        appendBookToDOM(addedBook);
    }
    else{
        let addedBook = new Book(name,author,length,'unread');
        myLibrary.push(addedBook);
        appendBookToDOM(addedBook);
    }
});

const display = document.querySelector('.display');

function displayLibrary(){
    for (let i =0; i<myLibrary.length; i++){
        appendBookToDOM(myLibrary[i]);
    }
}

function appendBookToDOM(book){
    const cards = document.createElement('div');
    cards.innerHTML = `Name: ${book.name} , Author: ${book.author} , Length: ${book.length}, Status: ${book.status}`;
    display.appendChild(cards);
}

window.onload = displayLibrary;