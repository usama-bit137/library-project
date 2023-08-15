# library-project
This is a project which prompts users to enter details of their favourite books in a form which upon submission updates the JSDOM and displays the books on a tile. The user has the ability to toggle whether they have read a book or not. They can also manually remove a book from the list. The only issue with this project is that a page refresh will remove all books added.

The logic of the app works as follows: 
1. There is a hidden form which has a CSS `display: none` property.

2. When the user clicks on the button labelled 'Click to add a new book', the form's display property is changed to `block` which causes it show up.

3. The user can then type their inputs into the form and either, cancel their changes, or they can submit the form. In the first case, an alert statement informs the user that they have unsaved changes and then clears the form. In the latter case, the information in the form creates a new Book object from the `Book` class.

4. This new object is then pushed into an array called `myLibrary`. Then a `for` loop will iterator over the `myLibrary` array and call a `addBookstoDashboard` method for each book. This will add all new books to the JSDOM and update the UI.

5. Once completed, the user is sent an alert message which says "<nameOfBook> by <author> added to My Library".

6. There is further functionality implemented which removes books from the `myLibrary` array which removes the book from the DOM and another which updates the read status of the book.

7. I found that the best way to implement these funtionalities from my limited understanding (at the time) was to use a `setTimeout` function which allowed me to wait until the book was deleted from the `myLibrary` array before is was deleted from the DOM. Otherwise, I had found that the DOM would delete all items in `myLibrary` after and including the book that I had decided to delete. 
