"use strict";

function init() {
  renderBooks();
}

function renderBooks() {
  var books = getBooks();
  var strHtml =
    "<table><tr><th>Id</th><th>Title</th><th>Author</th><th>Price</th><th>Action</th></tr>";
  books.forEach(function (book) {
    strHtml += `<tr><td>${book.id}</td><td>${book.title}</td><td>${book.author}</td><td>${book.price}$</td><td class="action"><button class="update" onclick="onUpdateBook(${book.id})">Update</button><button class="delete" onclick="onRemoveBook(${book.id})">Delete</button><button class="raed" onclick="onRead(${book.id});toggleElmentsDisplay()">Read</button></td></tr>`;
  });
  strHtml += `</table>`;
  var elTableContainer = document.querySelector(".table-container");
  elTableContainer.innerHTML = strHtml;
}

function renderDetailsPage() {
  var strHtml = `<h2 class="book-title">${gBookDetails.title}</h2>
    <h3 class="book-author">By: ${gBookDetails.author}</h3>
    <img src="img/${gBookDetails.photo}" alt="" />
    <div class="book-rating">Book is rated:<span class="current-rating"> ${gBookDetails.rate}</span> by ${gBookDetails.howManyRated} users</div>
    <div class="rate-book">
    <i class="fas fa-plus-square fa-2x" onclick="increaseRate()"></i></i><input type="text" value="0" class="rate"><i class="fas fa-minus-square fa-2x" onclick="decreaseRate()"></i>
<button class="submit" onclick="onSubmitRating(${gBookDetails.rate})">Submit Rating</button></div>
    <div class="description">
    ${gBookDetails.description}
    </div><div class="go-back" onclick="init();toggleElmentsDisplay()">Back</div>`;
  var elDetailsContainer = document.querySelector(".table-container");
  elDetailsContainer.innerHTML = strHtml;
}

function onAddBook() {
  addBook();
  renderBooks();
}

function onRemoveBook(bookId) {
  removeBookById(bookId);
  renderBooks();
}

function onUpdateBook(bookId) {
  var newPrice = +prompt("Enter the new price");
  updateBook(bookId, newPrice);
  renderBooks();
}

function onRead(bookId) {
  gBookDetails = getBookDetails(bookId);
  renderDetailsPage();
}

function onSubmitRating() {
  addRating(gBookDetails);
  renderDetailsPage();
}

function onSortTable() {
  var elSortBy = document.querySelector(`select[name=sortBy]`);
  var sortBy = elSortBy.value;
  setSortBy(sortBy);
  getSortedBooks();
  renderBooks();
}

function onNextPage() {
  nextPage();
  renderBooks();
}

function onPreviousPage() {
  previousPage();
  renderBooks();
}
