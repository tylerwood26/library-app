const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    id = self.crypto.randomUUID();
    // create new book
    const book = new Book(id, title, author, pages, read)
    // store it in myLibrary
    myLibrary.push(book);
}