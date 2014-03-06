function action_pause() {
	document.getElementById("vidplayer").pause();
}

function action_play() {
	document.getElementById("vidplayer").play();
}

function action_movie(link) {
	var src = "<video id='vidplayer' width='640' height='360' controls onpause='javascript:change_pause();' onplay='javascript:change_play();'><source src='"+ link +"' type='video/mp4'></video>";
    var movie = document.getElementById('movie');
    movie.innerHTML = src;
	toggleMovie('movie');
	var start_time = 0;
	var state = gapi.hangout.data.getState();
	document.getElementById('vidplayer').addEventListener('canplay', function() {
		if (state['state'] == "pause") {
			start_time = parseInt(state['pause_time']);
		} else if (state['state'] == "play") {
			difference = (new Date()).getTime() - parseInt(state['play_time_global']);
			start_time = parseInt(state['play_time']) + (difference/1000);
		}
  		this.currentTime = start_time;
  		if (state['state'] == "play") {
  			action_play();
  		}
}, false);
}

function action_return() {
	toggleMovie('selection');
}