var nickname = '';
var playlists = [];

function update_nickname() {
$.ajax({
    type: "GET",
    url: NETWORK_SERVICES_API+"query_user.pls",
    dataType: "json",
    data: { wwuserid: wwuserid() },
    success: function(data) { 
				data = data.shift();
				//console.log(data);
				nickname = data['nickname'];
		}
});
}

function get_playlists( callback ) {
$.ajax({
    type: "POST",
    url: NETWORK_SERVICES_API+"get_playlists.pls",
    dataType: "json",
    data: { wwuserid: wwuserid(), sessionid: sessionid() },
    success: callback;
    }
});
}

