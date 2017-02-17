$(document).ready(function() {

    $.ajax({
        url: 'https://bb-election-api.herokuapp.com/',
        method: 'GET',
        dataType: 'json'
  }).done(function(data) {

    $.each(data.candidates, function(){


    $('<li>').html(data.name + ": " + this.votes).appendTo('#bob');


});
