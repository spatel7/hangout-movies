function notify_play() {
	gapi.hangout.data.submitDelta( {"action": "media_change", "state": "play"} );
}

function notify_pause() {
	gapi.hangout.data.submitDelta( {"action": "media_change", "state": "pause"} );
}

function notify_movie(link) {
	gapi.hangout.data.submitDelta( {"action": "add_movie", "link": link} );
}

function notify_return() {
    gapi.hangout.data.submitDelta( {"action": "go_back"} );
}