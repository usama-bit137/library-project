// Let's create the bare bones: 
// 1. build the constructor
// 2. 

let myLibrary = []; 

function Book(title, author, pages, liked, rating) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.liked = liked; 
    this.rating = rating;   
}

function addBookToLibrary(title, author, pages, liked, rating) {
    var newBook = new Book(title, author, pages, liked, rating);
    myLibrary.push(newBook); 
    return newBook
}


const agot = addBookToLibrary("A Game of Thrones", "George R.R. Martin", "798", "yes", "10/10"); 
console.table(agot);
console.log(myLibrary); 

// we need a rating system and a thumbs-up... can probably
// do it really easily 

