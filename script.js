SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'

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
