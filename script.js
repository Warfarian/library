const myLibrary = [];

// form functionality 

let newBook = document.getElementById("addNew");
let submit = document.getElementById("submit");

document.getElementById("newBook").style.display = 'none';

document.getElementById("newBook").style.display = 'none';

submit.addEventListener('click', () =>{
    document.getElementById("newBook").style.display = 'none';
});

newBook.addEventListener('click', (x)=>{
    if (x == 1){
        document.getElementById("newBook").style.display = 'none';
    }
    else{
        document.getElementById("newBook").style.display = "block";
    }
});

// functions 

// constructor
function Book(name,author,length,status){
    this.name = name;
    this.author = author;
    this.length = length;
    this.status = status;
}

function addBooks(){
    let addedBook = new Book();
    console.log(addedBook);
    
}