/* eslint-disable no-restricted-globals */
import Navlisteners from './modules/navlistener.js';
import BookShelv from './modules/UI-layout.js';

const dataContainer = document.querySelector('.dataContainer');
const formSubmision = document.querySelector('.formSubmission');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const List = document.querySelector('.List');
const addNew = document.querySelector('.Add-New');
const Contact = document.querySelector('.Contact');
const contactSection = document.querySelector('.contact');
const dataContainerTitle = document.querySelector('.dataContainerTitle');

const bookshel = new BookShelv(dataContainer);
const navlisteners2 = new Navlisteners(dataContainer, contactSection, formSubmision, dataContainerTitle);
// class BookShelv {
//   books = JSON.parse(localStorage.getItem('books')) || [];

//   addBooks() {
//     const addedBook = {
//       title: titleInput.value,
//       author: authorInput.value,
//     };
//     this.books.push(addedBook);

//     localStorage.setItem('books', JSON.stringify(this.books));
//   }

//   displayBooks() {
//     this.books.forEach((hold) => {
//       const elementContainer = document.createElement('div');
//       elementContainer.classList.add('element-container');
//       const infoContainer = document.createElement('p');
//       const removeButton = document.createElement('button');
//       removeButton.classList.add('removebtn');
//       removeButton.type = 'button';

//       infoContainer.innerText = `"${hold.title}" by ${hold.author}`;
//       removeButton.innerText = 'Remove';
//       elementContainer.append(infoContainer, removeButton);
//       dataContainer.appendChild(elementContainer);
//     });
//   }

//   removeBook(removeButton, index) {
//     dataContainer.removeChild(removeButton.parentElement);
//     this.books.splice(index, 1);
//     localStorage.setItem('books', JSON.stringify(this.books));
//     window.location.reload();
//   }

//   // static ListRemove() {
//   //   dataContainer.style.display = 'flex';
//   //   contactSection.style.display = 'none';
//   //   formSubmision.style.display = 'none';
//   //   dataContainerTitle.style.display = 'flex';

//   //   if (dataContainer.childElementCount === 0) {
//   //     dataContainer.style.display = 'none';
//   //   }
//   // }

//   // static addNewRemove() {
//   //   dataContainer.style.display = 'none';
//   //   formSubmision.style.display = 'flex';
//   //   dataContainerTitle.style.display = 'none';
//   //   contactSection.style.display = 'none';
//   // }

//   // static ContactRemove() {
//   //   formSubmision.style.display = 'none';
//   //   dataContainer.style.display = 'none';
//   //   contactSection.style.display = 'flex';
//   //   dataContainerTitle.style.display = 'none';
//   // }
// }

// const bookshelv = new BookShelv();
bookshel.displayBooks();
const removeBtns = document.querySelectorAll('.removebtn');
removeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    bookshel.removeBook(btn, index);
  });
});

if (dataContainer.childElementCount === 0) {
  dataContainer.classList.add('hidden');
}
contactSection.style.display = 'none';
formSubmision.style.display = 'none';

formSubmision.addEventListener('submit', (e) => {
  e.preventDefault();
  bookshel.addBooks(titleInput.value, authorInput.value);
  window.location.reload();

  titleInput.value = '';
  authorInput.value = '';
});
List.addEventListener('click', (l) => {
  l.preventDefault();
  navlisteners2.ListRemove();
});

addNew.addEventListener('click', (l) => {
  l.preventDefault();
  navlisteners2.addNewRemove();
});

Contact.addEventListener('click', (l) => {
  l.preventDefault();
  navlisteners2.ContactRemove();
});
