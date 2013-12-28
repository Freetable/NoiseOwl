
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
}

function update_playlists() {
	get_playlists(function(data){
		playlists = data;
		$('#no_playlist_table').html('');
		playlists.forEach(function(element, index, array){
    	$('#no_playlist_table').append("<tr><td><button class='btn btn-block btn-info btn-xs' uid='"+element['playlist_number']+"'>"+element['playlist_name']+"</button></td></tr>");
		});
	});
}

$(document).ready(function() {
	resizeDiv();
	
	var wakeup_func = function () {
    if(FT_VALIDATED) {
      update_nickname();
      update_playlists();
      clearInterval(wakeup_hook);
    }else{
			setTimeout(wakeup_func, 300);
		}
}

});


