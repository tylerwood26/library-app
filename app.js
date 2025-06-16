const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.changeReadStatus = function() {
        if (this.read === 'Yes') {
            this.read = 'No';
        }
        else {
            this.read = 'Yes';
        }
        // change read status on screen
        // empty dom
        const container = document.querySelector('.container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // redisplay dom
        myLibrary.forEach(function(currentBook) {
            displayBooks(currentBook);
        })
    }
}

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read)
    myLibrary.push(newBook);
}

function displayBooks(book) {
    const htmlContainerDiv = document.querySelector(".container");
    const createNewCard = document.createElement("div");
    createNewCard.classList.add("card");             
    createNewCard.setAttribute('book-id', book.id);
    
    let bookData = [];
    let authorLabel = "Author: ";
    let pagesLabel = "Pages: ";
    let read = "Read: ";
    
    const titleH1 = document.createElement("h1");
    titleH1.textContent = book.title;
    bookData.push(titleH1);
    
    const authorH2 = document.createElement("h2");
    authorH2.textContent = authorLabel + book.author;
    bookData.push(authorH2);
    
    const pagesH3 = document.createElement("h3");
    pagesH3.textContent = pagesLabel + book.pages;
    bookData.push(pagesH3);
    
    const readH3 = document.createElement("h3");
    readH3.textContent = read + book.read;
    bookData.push(readH3);

    const changeReadStatusBtn = document.createElement("button");
    changeReadStatusBtn.setAttribute("type", 'button');
    changeReadStatusBtn.setAttribute('id', 'change-read-status');
    changeReadStatusBtn.innerHTML = 'Change Read Status';
    changeReadStatusBtn.setAttribute('onclick', 'whatBookToChange(event)');
    bookData.push(changeReadStatusBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", 'delete-btn');
    deleteBtn.setAttribute("onclick", 'deleteBook(event)');
    deleteBtn.innerHTML = "Delete";
    bookData.push(deleteBtn);
    
    bookData.forEach( (currentBookData) => {
        createNewCard.appendChild(currentBookData);
    })
    
    htmlContainerDiv.appendChild(createNewCard);
}

const dialog = document.querySelector("dialog");
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");

openModalButton.addEventListener("click", () => {
    dialog.showModal();
});

closeModalButton.addEventListener("click", () => {
    dialog.close();
});

const submitButton = document.querySelector(".submit");
submitButton.onclick = (event) => {
    event.preventDefault();
    title = document.getElementById('book-title').value;
    author = document.getElementById('book-author').value;
    pages = document.getElementById('book-pages').value;
    read = document.querySelector('input[name="book-read"]:checked').value;
    console.log(title, author, pages, read);
    addBookToLibrary(title, author, pages, read);
    const lastItem = myLibrary.length - 1;
    displayBooks(myLibrary[lastItem]);
    dialog.close();
}

function deleteBook(event) {
    
    let bookId = getBookId(event);
    
    let matchIndex = myLibraryIdMatchIndex(bookId);
    
    // delete matching book from screen and array
    let parentCard = event.target.closest('.card');
    myLibrary.splice(matchIndex, 1);
    parentCard.remove();
}

function getBookId(event) {
    let parentCard = event.target.closest('.card');

    return parentCard.getAttribute('book-id');
}

function myLibraryIdMatchIndex(bookId) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id === bookId) {
            return i;
        }
    }
}

function whatBookToChange(event) {
    let bookId = getBookId(event);

    let bookIndex = myLibraryIdMatchIndex(bookId);

    myLibrary[bookIndex].changeReadStatus();
}