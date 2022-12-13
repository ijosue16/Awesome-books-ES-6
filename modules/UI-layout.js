export default class BookShelv {
  constructor(dataContainer) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.dataContainer = dataContainer;
  }

      addBooks = (title, author) => {
        const addedBook = {
          title,
          author,
        };
        this.books.push(addedBook);
        localStorage.setItem('books', JSON.stringify(this.books));
        return addedBook;
      }

      displayBooks() {
        this.books.forEach((hold) => {
          const elementContainer = document.createElement('div');
          elementContainer.classList.add('element-container');
          const infoContainer = document.createElement('p');
          const removeButton = document.createElement('button');
          removeButton.classList.add('removebtn');
          removeButton.type = 'button';

          infoContainer.innerText = `"${hold.title}" by ${hold.author}`;
          removeButton.innerText = 'Remove';
          elementContainer.append(infoContainer, removeButton);
          this.dataContainer.appendChild(elementContainer);
        });
      }

      removeBook =(removeButton, index) => {
        this.dataContainer.removeChild(removeButton.parentElement);
        this.books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(this.books));
        window.location.reload();
      }
}