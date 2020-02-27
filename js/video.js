var video;

function getVid(){
	video = document.querySelector("#myVideo");
}
// check in chrome //
function playVid() {

	video.play();
	console.log("Play Video");
	document.getElementById('volume').innerHTML = video.volume * 100 + ('%');
	console.log(video)

}

function pauseVid() {

	video.pause();
	console.log("Pause Video");

}

function decreaseSpeed() {

	var video = document.getElementById('myVideo')
	video.playbackRate /= 1.25;
	console.log("Speed is" + video.playbackRate);

}

function increaseSpeed() {

	var video = document.getElementById('myVideo')
	video.playbackRate *= 1.25;
	console.log("Speed is" + video.playbackRate);
}

//need to reset time when looped back to the start
function skipAhead() {
	var video = document.getElementById('myVideo')

	if(video.currentTime <video.duration){
		video.currentTime += 60
	}
	else{
		video.currentTime = 0
		video.playbackRate = 1.0
	}

	console.log("Current location is "+ video.currentTime);

}

function mute() {

	if (video.muted){
		console.log("Changing to Unmuted");
		video.muted = false;
		document.getElementById('mute').innerHTML = ('mute');
	}
	else{
		video.muted = true;
		document.getElementById('mute').innerHTML = ('unmute');
		console.log("Changing to Muted");
}
}

function changeVolume() {

	var video = document.getElementById("myVideo")
	video.volume = volumeSlider.value/100
	console.log("Volume is", video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'

}

function gray() {

	var element = document.querySelector("#myVideo");
	element.classList.add("grayscale");

	console.log("In grayscale")
}

function color() {

	var element = document.querySelector("#myVideo");
	element.classList.remove("grayscale");

	console.log("In color")
}


