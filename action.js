function action_pause() {
	document.getElementById("vidplayer").pause();
	//submit new pause time
}

function action_play() {
	document.getElementById("vidplayer").play();
	//update difference time
}

function action_movie(link) {
	var src = "<video id='vidplayer' width='640' height='360' controls onpause='javascript:change_pause();' onplay='javascript:change_play();'><source src='"+ link +"' type='video/mp4'></video>";
    var movie = document.getElementById('movie');
    movie.innerHTML = src;
	toggleMovie('movie');
	//submitdelta with current time & start movie with difference time
}

function action_return() {
	toggleMovie('selection');
}