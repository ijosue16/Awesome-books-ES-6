/* eslint-disable no-restricted-globals */
import Navlisteners from './modules/navlistener.js';
import BookShelv from './modules/UI-layout.js';
import { DateTime, DATETIME_FULL_WITH_SECONDS } from './modules/times.js';

const dataContainer = document.querySelector('.dataContainer');
const formSubmision = document.querySelector('.formSubmission');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const List = document.querySelector('.List');
const addNew = document.querySelector('.Add-New');
const Contact = document.querySelector('.Contact');
const contactSection = document.querySelector('.contact');
const dataContainerTitle = document.querySelector('.dataContainerTitle');
const time = document.querySelector('.time');

const bookshel = new BookShelv(dataContainer);
const navlisteners2 = new Navlisteners(dataContainer, contactSection, formSubmision, dataContainerTitle);

function clock() {
  const dt = DateTime.now();
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

setInterval(clock, 10);

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
