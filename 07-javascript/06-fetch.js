const url = "https://anapioficeandfire.com/api/books/";

const app =
  typeof document !== "undefined" ? document.querySelector("#books") : null;

const fetchData = async (url, container = app) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  if (!container) {
    return [];
  }

  const response = await fetch(url);
  const books = await response.json();
  const loading = container.querySelector("#loading");

  if (loading) {
    loading.remove();
  }

  const bookList = document.createElement("div");
  bookList.className = "book-list";
  bookList.style.display = "flex";
  bookList.style.flexDirection = "column";
  bookList.style.alignItems = "center";

  books.forEach((book) => {
    const block = document.createElement("section");
    block.className = "book-block";
    block.style.textAlign = "center";
    block.style.marginBottom = "3rem";

    const title = document.createElement("h2");
    title.textContent = book.name;

    const author = document.createElement("p");
    author.textContent = `by ${book.authors.join(", ")}`;

    const year = document.createElement("p");
    year.textContent = String(new Date(book.released).getFullYear());

    const pages = document.createElement("p");
    pages.textContent = `${book.numberOfPages} pages`;

    block.append(title, author, year, pages);
    bookList.append(block);
  });

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.append(bookList);

  return books;
};

if (typeof document !== "undefined" && app) {
  fetchData(url);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchData };
}
