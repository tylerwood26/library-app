const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// next 6 lines are temp test 
const testBook = new Book(2, 'Test', 'Tyler', 302, 'not read');
myLibrary.push(testBook);
const testBook2 = new Book (7, 'Test 2', 'Dave', 455, 'read');
myLibrary.push(testBook2);
const testBook3 = new Book (9, 'Test 3', 'Cassie', 420, 'read');
myLibrary.push(testBook3);

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read)
    myLibrary.push(newBook);
}

function displayBooks(book) {
    const htmlContainerDiv = document.querySelector(".container");
    const createNewCard = document.createElement("div");
    createNewCard.classList.add("card");             

    let bookData = [];
    let authorLabel = "Author: ";
    let pagesLabel = "Pages: ";
    let idLabel = "ID: ";

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
    readH3.textContent = book.read;
    bookData.push(readH3);
    
    const idH4 = document.createElement("h4");
    idH4.textContent = idLabel + book.id;
    bookData.push(idH4);

    bookData.forEach( (currentBookData) => {
        createNewCard.appendChild(currentBookData);
    })

    htmlContainerDiv.appendChild(createNewCard);
}

myLibrary.forEach(displayBooks);