
//<tr><td><button class='btn btn-block btn-info btn-xs'>test</button></td></tr>

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$('#no_queue').css({'height': vph * 0.7});
$('#no_songs').css({'height': vph * 0.7});
$('#no_playlists').css({'height': vph * 0.7});

$(document).ready(function() {
	resizeDiv();
	update_nickname();
	get_playlists();
});

