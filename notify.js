function notify_play() {
	var curr_time = (new Date()).getTime();
	var vidplayer_time = document.getElementById('vidplayer').currentTime;
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.MEDIA_CHANGE;
	newState[STATE_KEY] = STATE_VALUES.PLAY;
	newState["play_time"] = vidplayer_time.toString();
	newState["play_time_global"] = curr_time.toString();
	newState["new_movie"] = "false";		
	gapi.hangout.data.submitDelta(newState);
}

function notify_pause() {
	var vidplayer_time = document.getElementById('vidplayer').currentTime;
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.MEDIA_CHANGE;
	newState[STATE_KEY] = STATE_VALUES.PAUSE;
	newState["pause_time"] = vidplayer_time.toString();	
	newState["new_movie"] = "false";	
	gapi.hangout.data.submitDelta(newState);
}

function notify_movie(link) {
	var state = gapi.hangout.data.getState();
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.PLAY_MOVIE;
	newState["link"] = link;
	newState[STATE_KEY] = "undefined";
	newState["new_movie"] = "false";	
	gapi.hangout.data.submitDelta(newState);
}

function notify_add_movie(link) {
	var state = gapi.hangout.data.getState();
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.ADD_MOVIE;
	newState["link"] = link;
	newState[STATE_KEY] = "undefined";
	newState["new_movie"] = "true";
	gapi.hangout.data.submitDelta(newState);
}

function notify_return() {
	var newState = {};
	newState[ACTION_KEY] = ACTION_VALUES.BACK;
	newState["new_movie"] = "false";
    gapi.hangout.data.submitDelta(newState);
}

function notify_vote_for(link) {
	var state = gapi.hangout.data.getState();
	var votes;
	if (state[link] !== undefined) {
		votes = parseInt(state[link]) + 1;
	} else {
		votes = 1;
	}
	var newState = {};
	newState[link] = votes.toString();
	newState["new_movie"] = "false";
	gapi.hangout.data.submitDelta(newState);
}

function notify_vote_against(link) {
	var state = gapi.hangout.data.getState();
	var votes;
	if (state[link] !== undefined) {
		votes = parseInt(state[link]) - 1;
	} else {
		votes = -1;
	}
	var newState = {};
	newState[link] = votes.toString();
	newState["new_movie"] = "false";
	gapi.hangout.data.submitDelta(newState);
}