// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area
$(function () {
  const $userInput1 = $('#userInput1');
  const $copy = $('#copy');
  const $output1 = $('#output1');

  $copy.on('click', function (event) {
    console.log('click event', event);
    $output1.text($userInput1.val());
  });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area
  const $userInput2 = $('#userInput2');
  const $output2 = $('#output2');

  $userInput2.on('input', function (event) {
    console.log('input event', event);
    $output2.text($userInput2.val());
  });
});
