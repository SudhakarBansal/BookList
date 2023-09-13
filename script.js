const thead = document.body.getElementsByTagName('thead');
const submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', ((e) => {
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const ISBN = document.querySelector('#isbn');
    addBooks(ISBN.value, title.value, author.value);
    clearForm(ISBN, title, author);

}))

function addBooks(isbn, title, author) {
    const booklist = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${isbn}</td><td>${title}</td><td>${author}</td>`
    booklist.appendChild(row);
}

function clearForm(isbn, title, author) {
    title.value = "";
    author.value = "";
    isbn.value = "";
}