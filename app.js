const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read)
    myLibrary.push(newBook);
}

function displayBooks() {
    // loop through array
    
    // display book to page
}