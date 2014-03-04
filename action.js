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
}

function action_return() {
	toggleMovie('selection');
}