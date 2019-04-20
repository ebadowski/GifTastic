var gifList = ['dogs', 'cats', 'birbs'];

addButtons(gifList);




// add buttons
// for loop through an array
function addButtons(arr) {
  //do not modify array in this
  for (var i = 0; i < arr.length; i++) {
    $('<button>', {
      class: 'gif-button',
      id: arr[i],
      value: i
    }).text(arr[i]).appendTo('#buttons');
  }
}


// update page only through top button click
$('.gif-button').on('click', function () {
  //ajax call

});


// add gifs to the body
// should call of click of header button and submit click
function getAjax() {

}
function addGifs() {
  getAjax();
  var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
//   // using key from previous activities
//   var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  //   var searchTerm = $('#gif-search').val().trim();
  //   searchTerm.replace(/ /g, '_'); //replaces internal spaces with '_'
  //   // adds search to api link
  //   queryURL += '&tag=' + searchTerm;
  //   // Perfoming an AJAX GET request to our queryURL
  //   $.ajax({
  //     url: queryURL,
  //     method: 'GET'
  //   }).then(function(response) {
  //       var imageUrl = response.data.image_original_url;

        // $('<img>', {
        //   src: imageUrl,
        //   alt: 'cat image',
        //   animate: 'STUFF',
        //   still: 'STUFF',
        //   state: 'still'
        // }).prependTo('#gifs';)

}



// adds button to top of page
$('#add-giff').on('click', function () {
  event.preventDefault();

});




//   // using key from previous activities
//   var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

//   var searchTerm = $('#gif-search').val().trim();
//   searchTerm.replace(/ /g, '_'); //replaces internal spaces with '_'
//   // adds search to api link
//   queryURL += '&tag=' + searchTerm;
//   // Perfoming an AJAX GET request to our queryURL
//   $.ajax({
//     url: queryURL,
//     method: 'GET'
//   }).then(function(response) {
//       var imageUrl = response.data.image_original_url;
//       //Make button stuff

//       // // Creating and storing an image tag
//       // var catImage = $('<img>');

//       // // Setting the catImage src attribute to imageUrl
//       // catImage.attr('src', imageUrl);
//       // catImage.attr('alt', 'cat image');

//       // // Prepending the catImage to the images div
//       // $('#images').prepend(catImage);
//     });