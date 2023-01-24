let myLibrary = [{
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    pages: "798"
} ]; 

function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;   
}

console.log(myLibrary); 

// DOM Manipulation:
let dashboard = document.querySelector('.dashboard');
let newButton = document.querySelector('.add-item')

let dashItem = document.createElement('div'); 

dashItem.setAttribute('class', '.dash-item'); 
dashboard.appendChild(dashItem); 






function showForm() {
    if (document.getElementById('formElement').style.display == 'block'){
        document.getElementById('formElement').style.display = 'none'; 
    } else {
        document.getElementById('formElement').style.display = 'block'; 
    }
}

function addBookToLibrary() {
    //var newBook = new Book(title, author, pages, liked, rating);
    //myLibrary.push(newBook); 
    let newBook = new Book();
    newBook.title = document.getElementById('title').value; 
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value; 

    return newBook
}

