function notify_play() {
	var curr_time = (new Date()).getTime();
	var vidplayer_time = document.getElementById('vidplayer').currentTime;
	gapi.hangout.data.submitDelta( {"action": "media_change", "state": "play", "play_time": vidplayer_time.toString(), "play_time_global": curr_time.toString()} );
}

function notify_pause() {
	var vidplayer_time = document.getElementById('vidplayer').currentTime;
	gapi.hangout.data.submitDelta( {"action": "media_change", "state": "pause", "pause_time": vidplayer_time.toString()} );
}

function notify_movie(link) {
	var state = gapi.hangout.data.getState();
	gapi.hangout.data.submitDelta( {"action": "add_movie", "link": link, "state": "undefined"} );
}

function notify_return() {
    gapi.hangout.data.submitDelta( {"action": "go_back"} );
}