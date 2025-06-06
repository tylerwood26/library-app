const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// next 4 lines are temp test 
const testBook = new Book(2, 'Test', 'Tyler', 302, 'not read');
myLibrary.push(testBook);
const testBook2 = new Book (7, 'Test 2', 'Dave', 455, 'read');
myLibrary.push(testBook2);

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read)
    myLibrary.push(newBook);
}

function displayBooks(book) {
    const htmlContainerDiv = document.querySelector(".container");
    const createNewCard = document.createElement("div");
    createNewCard.classList.add("card");             

    const titleH1 = document.createElement("h1");
    titleH1.textContent = book.title;
    
    const authorH2 = document.createElement("h2");
    authorH2.textContent = book.author;
    
    const pagesH3 = document.createElement("h3");
    pagesH3.textContent = book.pages;
    
    const readH3 = document.createElement("h3");
    readH3.textContent = book.read;
    
    const idH4 = document.createElement("h4");
    idH4.textContent = book.id;
    
    createNewCard.appendChild(titleH1);
    createNewCard.appendChild(authorH2);
    createNewCard.appendChild(pagesH3);
    createNewCard.appendChild(readH3);
    createNewCard.appendChild(idH4);

    // append card div to container
    htmlContainerDiv.appendChild(createNewCard);
}

myLibrary.forEach(displayBooks);