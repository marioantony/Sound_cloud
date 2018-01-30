SC.initialize({
  client_id: '2t9loNQH90kzJcsFCODdigxfp325aq4z'

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
