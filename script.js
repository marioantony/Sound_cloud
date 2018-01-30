SC.initialize({
  client_id: '02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea'

});

$(document).ready(function() {

  SC.stream('/tracks/155366202', function(sound) {
    $('#start12').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop12').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


});
