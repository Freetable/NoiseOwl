var NETWORK_SERVICES_URL = 'https://gatekeepers.freetable.info/';
var NETWORK_SERVICES_API = 'http://gatekeepers.freetable.info/api/';
var FT_VALIDATED = FALSE;

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();


function wwuserid(){ return $.cookie('WWUSERID'); }

function sessionid(){ return $.cookie('sessionid'); }

function verify_user(){
      real_verify_user( wwuserid(), sessionid(), function (data) {
      data = data.shift();
      //console.log(data);
      if( typeof data['1'] == 'undefined' ) { 
				//cookies didn't work check url and try again
				$.cookie('WWUSERID', QueryString.uid, { expires: 30 });
				$.cookie('sessionid', QueryString.sid, { expires: 30 });
				real_verify_user( wwuserid(), sessionid(), function (data) { 
		      			data = data.shift();
		      			//console.log(data);
					if( typeof data['1'] == 'undefined' ) {
						// we failed back to gatekeepers to try again
						window.location.replace(NETWORK_SERVICES_URL);
					}else{
					FT_VALIDATED = TRUE;
					}});
			}else{
				FT_VALIDATED = TRUE;
			}
	});
}

function real_verify_user( uid, sid, callback ){
	$.ajax({
		type: "GET",
		url: NETWORK_SERVICES_API+"verify_user.pls",
		dataType: "json",
		data: { wwuserid: uid, sessionid: sid },
		success: callback
    });
}

verify_user();

