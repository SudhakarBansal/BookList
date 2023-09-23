import storedBooks from "./storedBooks.js";

const alertBox = document.querySelector('.alert');
//display the stored books

function showAlert(msg, color) {
    alertBox.style.display = 'block';
    alertBox.textContent = msg;
    alertBox.style.backgroundColor = color;
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
}

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
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const ISBN = document.querySelector('#isbn').value;

    if (!title || !author || !ISBN) {
        showAlert("Please fill in all fields", "#f44336")
        return; // Exit the function early if any field is empty
    }

    const newBook = {
        isbn: ISBN,
        title: title,
        author: author
    };

    addBooks(newBook);
    showAlert("Record Added Successfully", "green")
    clearForm();
});


//deleting the records
document.querySelector('#book-list').addEventListener('click', ((e) => {
    const element = e.target;
    if (element.classList.contains('delbtn')) {
        element.parentElement.parentElement.remove();
    }
    showAlert("Record Deleted Successfully", "green")

}))


//clearing the form
function clearForm() {
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#isbn').value = "";
}