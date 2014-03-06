function notify_play() {
	var curr_time = (new Date()).getTime();
	var vidplayer_time = document.getElementById('vidplayer').currentTime;
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.MEDIA_CHANGE;
	newState[STATE_KEY] = STATE_VALUES.PLAY;
	newState["play_time"] = vidplayer_time.toString();
	newState["play_time_global"] = curr_time.toString();	
	gapi.hangout.data.submitDelta(newState);
}

function notify_pause() {
	var vidplayer_time = document.getElementById('vidplayer').currentTime;
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.MEDIA_CHANGE;
	newState[STATE_KEY] = STATE_VALUES.PAUSE;
	newState["pause_time"] = vidplayer_time.toString();	
	gapi.hangout.data.submitDelta(newState);
}

function notify_movie(link) {
	var state = gapi.hangout.data.getState();
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.ADD_MOVIE;
	newState["link"] = link;
	newState[STATE_KEY] = "undefined";
	gapi.hangout.data.submitDelta(newState);
}

function notify_return() {
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.BACK;
    gapi.hangout.data.submitDelta(newState);
}