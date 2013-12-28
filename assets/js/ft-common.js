var nickname = '';


$.ajax({
    type: "GET",
    url: NETWORK_SERVICES_URL+"api/query_user.pls",
    dataType: "json",
		data: { wwuserid: wwuserid() },
    success: function(data) { 
				data = data.shift();
				console.log(data);
				nickname = data['nickname'];
		}
});

