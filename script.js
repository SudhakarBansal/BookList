import storedBooks from "./storedBooks.js";

//display the stored books

function displayBooks() {
    const books = storedBooks;
    books.forEach((book) => {
        addBooks(book);
    });
}
document.addEventListener("DOMContentLoaded", displayBooks);


//Adding the records

function addBooks(book) {
    const booklist = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.isbn}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button class="delbtn">&#10062;</button></td>`;
    booklist.appendChild(row);
}


const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', ((e) => {
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const ISBN = document.querySelector('#isbn');
    addBooks(ISBN.value, title.value, author.value);
    clearForm(ISBN, title, author);
}))

//deleting the records
const delbtn = document.getElementsByTagName('button')[0];
delbtn.addEventListener('click', ((e) => {
    console.log(delbtn);
}))


//clearing the form
function clearForm(isbn, title, author) {
    title.value = "";
    author.value = "";
    isbn.value = "";
}