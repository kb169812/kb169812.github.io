$(document).ready(function () {
  $(".sgRow2").click(function () {
    console.log('sanity check.2');

    // find the content that we are trying to open and close
    var clickedContent = $(this).next().find('.detailcontent');

    // close all other slides
    $('.detailcontent').slideUp();

    // if the current one is open, close it.
    if(clickedContent.data("status") == "open") {
      clickedContent.slideUp(); // close the clicked detail
      clickedContent.data("status", "closed"); // set data-status to "closed"
    }
    // else, open it.
    else { // data-status is closed in this case
      clickedContent.slideDown(); //open the clicked details
      clickedContent.data("status", "open"); // set data-status to "open"
    }
  });

  // Create modal dialogs for movie trailers
  $('.sgMovieTrailer').addClass('modal');
  $('.sgMovieTrailer').each(function () {
    $(this).html('<div class="modal-content"><div class="modal-body">' + $(this).html() + '</div></div>');
  });
  $('.sgMovieTrailer .modal-content').prepend('<div class="modal-header"><span class="modal-close">x</span></div>')

  // Movie trailers
  $('.sgMovieImage').click(function () {
    $(this).siblings('.sgMovieTrailer').show();
  });

  // Google maps modal
  $('#open-map').click(function (e) {
    e.preventDefault();
    $('#map-modal').show();
  });

  // Close function for all modals
  $('.modal-close').click(function () {
    $(this).closest('.modal').hide();
  });

});
