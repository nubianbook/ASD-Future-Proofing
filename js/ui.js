$(document).ready(function(){
	$('#datepicker') .datepicker();
});

$(function() {
		$( "#tabs" ).tabs();
});


$.get('data.xml', function(d){
    $('body').append('<h1> Recommended Movies to watch </h1>');
    $('body').append('<dl />');

    $(d).find('movie').each(function(){

        var $movie = $(this);
        var title = $movie.attr("title");
        var description = $movie.find('description').text();
        var imageurl = $movie.attr('imageurl');

        var html = '<dt> <img class="bookImage" alt="" src="' + imageurl + '" /> </dt>';
        html += '<dd> <span class="loadingPic" alt="Loading" />';
        html += '<p class="title">' + title + '</p>';
        html += '<p> ' + description + '</p>' ;
        html += '</dd>';

        $('dl').append($(html));

        $('.loadingPic').fadeOut(1400);
    });

});
