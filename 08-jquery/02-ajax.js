const url = 'https://anapioficeandfire.com/api/books?pageSize=50';

const $books = $('#books');
const $loading = $('#loading');

const addBookToDOM = (item) => {
  const $element = $('<div>').addClass('d-flex flex-column align-items-center mt-4');
  const $title = $('<h4>').text(item.name);
  const $author = $('<p>').text(`by ${item.authors[0]}`);
  const $published = $('<p>').text(item.released.slice(0, 4));
  const $pages = $('<p>').text(`${item.numberOfPages} pages`);

  $element.append($title, $author, $published, $pages);
  $books.append($element);
};

$.ajax({
  url: url,
  method: 'GET',
  dataType: 'json',
})
  .done((data) => {
    data.forEach((item) => {
      addBookToDOM(item);
    });
  })
  .fail((xhr, status, error) => {
    console.log(status, error, xhr);
    const $error = $('<p>').text('An error occurred. Please try again.');
    $books.append($error);
  })
  .always(() => {
    $loading.remove();
  });
