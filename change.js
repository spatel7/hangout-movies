function change_play() {
	if (enoughSpace()) {
		alert("This is happening.");
		notify_play();	
	}
}

function change_pause() {
	if (enoughSpace()) {
		alert("This is happening.");
		notify_pause();
	}
}

function change_play_movie(link) {
    notify_movie(link);
}

function change_add_movie(link) {
	notify_add_movie(link);
}

function change_return() {
    notify_return();
}

function change_stalled() {
	notify_pause();
	alert("called");
}

function enoughSpace() {
	var state = gapi.hangout.data.getState();
	var curr_time = (new Date()).getTime();
	var difference = curr_time - parseInt(state['call_time']);
	if (difference < 3000) {
		alert(difference);
		return false;
	}
	return true;
}