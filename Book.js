export class Book {
    constructor(title, author, description, pages) {
        console.log("entre");
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = 0;
        this.read = false;
        console.log("sort");
  };
    readBook(page) {
        if (page < 1 || page > this.pages) {
            console.log("if ok");
            return 0;
        }
        else if (page>=1 & page<this.pages) {
            this.currentPage = page;
            console.log("else 1 ok");
            return 1;
        }
        else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            console.log("else 2 ok");
            return 1;
        }
    }
}



export const books = [];

const b1 = new Book('Harry Potter 1', 'JK Rolling', "histoire d'un petit garçon", 250);
console.log(b1);
const b2 = new Book('Harry Potter 2', 'JK Rolling', "histoire d'un petit gars", 300);
console.log(b2);
const b3 = new Book('Harry Potter 3', 'JK Rolling', "histoire d'un parrain", 350);
console.log(b3);
Books.push(b1);
Books.push(b2);
Books.push(b3);
b2.readBook(200);
b3.readBook(350);
