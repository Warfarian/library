    // Main array of books
const myLibrary = [
    new Book("Lord of the Rings", "J.R.R Tolkien", "122 pages", "read"),
    new Book("Naked Lunch", "J.A. Bayona", "164 pages", "unread"),
    new Book("A Song of Ice and Fire", "George R.R. Martin", "435 pages", "read")
];

// Book constructor function
function Book(name, author, length, status) {
    this.name = name;
    this.name = name;
    this.author = author;
    this.length = length;
    this.status = status;
}

// Event listener for form submission
let submit = document.querySelector('#submit');
submit.addEventListener('click', function addBookToLibrary(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let length = document.getElementById('length').value;
    let readStatus = document.querySelector("input[type='radio']:checked").value;

    let addedBook = new Book(name, author, length, readStatus);
    myLibrary.push(addedBook);
    appendBookToDOM(addedBook);
});

// Display container
const display = document.querySelector('.display');

// Function to display the entire library on page load
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        appendBookToDOM(myLibrary[i]);
    }
}

// Function to append a book to the DOM
function appendBookToDOM(book) {
    const cards = document.createElement('div');
    cards.classList.add('grid-item');
    // Checkbox for Read/Unread status
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = book.status === 'read'; // Check if the book is read
    checkbox.onchange = function() {
        toggleBookStatus(book, checkbox.checked);
    };

    // Create an <img> for the delete action
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'img/delete.svg'; // Change to your SVG file path
    deleteIcon.alt = 'Delete';
    deleteIcon.style.width = '20px'; // Set width if needed
    deleteIcon.style.cursor = 'pointer'; // Change cursor to pointer for better UX

    // Add event listener for the delete icon
    deleteIcon.onclick = function() {
        deleteBook(book);
    };

    // Set card content
    cards.innerHTML = `Name: ${book.name}, Author: ${book.author}, Length: ${book.length}, Status: ${book.status}`;
    cards.appendChild(checkbox); // Append checkbox to card
    cards.appendChild(deleteIcon); // Append delete icon to card
    display.appendChild(cards);
}


// Function to toggle the read/unread status of a book
function toggleBookStatus(book, isChecked) {
    book.status = isChecked ? 'read' : 'unread'; // Update the book status based on checkbox
    display.innerHTML = ''; // Clear the display
    displayLibrary(); // Re-display all books
}

// Function to delete a book from the library
function deleteBook(book) {
    const index = myLibrary.indexOf(book);
    if (index > -1) {
        myLibrary.splice(index, 1); // Remove the book from the array
    }
    display.innerHTML = ''; // Clear the display
    displayLibrary(); // Re-display all books
}

// Display the pre-existing books when the page loads
window.onload = displayLibrary;
