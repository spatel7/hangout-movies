function action_pause() {
	document.getElementById("vidplayer").pause();
}

function action_play() {
	document.getElementById("vidplayer").play();
	alert("Paused by action play");
}

function action_movie(link) {
	var src = "<video id='vidplayer' width='640' height='360' controls onpause='javascript:change_pause();' onplay='javascript:change_play();' onstalled='javascript:change_stalled();'><source src='"+ link +"' type='video/mp4'></video>";
    var movie = document.getElementById('movie');
    movie.innerHTML = src;
	toggleMovie('movie');
	var start_time = 0;
	var state = gapi.hangout.data.getState();
	document.getElementById('vidplayer').addEventListener('canplay', function() {
		if (state[STATE_KEY] == STATE_VALUES.PAUSE) {
			start_time = parseInt(state['pause_time']);
		} else if (state[STATE_KEY] == STATE_VALUES.PLAY) {
			difference = (new Date()).getTime() - parseInt(state['play_time_global']);
			start_time = parseInt(state['play_time']) + (difference/1000);
			alert("Starting at: " + start_time);
		}
  		this.currentTime = start_time;
  		if (state[STATE_KEY] == STATE_VALUES.PLAY) {
  			action_play();
  		}
}, false);
}

function action_add_movie(link) {
	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.name = 'movie_choice';
	checkbox.value = link;
	checkbox.onclick = function() { process_checkbox(this) };

	var label = document.createElement('label');
	label.innerHTML = link.substr(link.lastIndexOf("/")+1);

	document.getElementById('vote').style.display = "block";
	document.getElementById('vote').appendChild(checkbox);
	document.getElementById('vote').appendChild(label);
	document.getElementById('vote').appendChild(document.createElement('br'));
	alert("Link: " + link);
}

function process_checkbox(checkbox) {
	link = checkbox.value;
	if (checkbox.checked) {
		notify_vote_for(link);
	} else {
		notify_vote_against(link);
	}
}

function play_most_voted_movie() {
	var state = gapi.hangout.data.getState();
	var maxVotes = -100;
	var link;
	for (var key in state) {
  		if (state.hasOwnProperty(key)) {
    		if (key != 'pause_time' && key != 'play_time' && key != 'play_time_global' && key != 'link' && key != ACTION_KEY && key != STATE_KEY && key != "call_time") {
    			if (state[key] > maxVotes) {
    				maxVotes = state[key];
    				link = key;
    			}
    		}
    	}
  	}
  	notify_movie(link); // TODO: NOTIFY EVERYONE!
}

function action_return() {
	toggleMovie('selection');
}