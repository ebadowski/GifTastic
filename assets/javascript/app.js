var gifList = ['dogs', 'cats', 'birbs'];

addButtons(gifList);





function addButtons(arr) {
  $('#buttons').empty();
  //do not modify array in this
  for (var i = 0; i < arr.length; i++) {
    $('<button>', {
      class: 'gif-button',
      id: arr[i],
      value: i
    }).text(arr[i]).appendTo('#buttons');
  }
}


$(document).on("click", '.gif-button', function() {

  //using key from previous activities
  var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10';

  queryURL += '&q=' + $(this).attr('id');

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {
    var results = response.data;
    console.log(results);
    for (var i = 0; i < results.length; i++){
      var rating = results[i].rating;
      var imageUrl = results[i].images.fixed_height_small_still.url; 
      //var gifDiv = $("<div>");
      //gifDiv.attr('id', 'gif-container').prependTo('#gifs');
      $('<img>', {
        src: imageUrl,
        alt: 'cat image',
        class: 'gif',
        'data-animate': results[i].images.fixed_height_small.url, 
        'data-still': results[i].images.fixed_height_small_still.url,
        'data-state': 'still'
      }).prependTo('#gifs')
        //}).prependTo(gifDiv);
      //$('<p>').text('Rating: ' + rating).appendTo(gifDiv)
    }
  });
});

//pausing gifs
$(document).on('click', '.gif', function() {
  var state = $(this).attr('data-state');
  if (state === 'still') {
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  } else {
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }
});


//adds button to top of page
$('#add-gif').on('click', function () {
  event.preventDefault();
  var searchTerm = $('#gif-search').val().trim();
  searchTerm.replace(/ /g, '_'); //replaces internal spaces with '_'
  gifList.push(searchTerm);
console.log(gifList);
  addButtons(gifList);
});


