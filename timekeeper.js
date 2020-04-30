var timekeeper = {
	reset: null,
	go: null,
	timer: null,
	now: 0,
	time: null,
	hour: null,
	minute: null,
	second: null,

	initialize: function(){
		timekeeper.reset = document.getElementById('reset');
		timekeeper.go = document.getElementById('go');
		timekeeper.time = document.getElementById('time');

		timekeeper.reset.addEventListener("click", timekeeper.resetFunction);
		timekeeper.go.addEventListener("click", timekeeper.start);
		src = 'bensound-happyrock.mp3';
		audio = new Audio(src);

	},

	tick: function(){
		timekeeper.now++;
		var remaining = timekeeper.now;
		var hours = Math.floor(remaining/3600);
		remaining = remaining - (hours*3600);
		var mins = Math.floor(remaining/60);
		remaining = remaining - (mins*60);
		var secs = remaining;

		if (hours<10) { hours = "0" + hours; }
    	if (mins<10) { mins = "0" + mins; }
    	if (secs<10) { secs = "0" + secs; }
		timekeeper.time.innerHTML = hours + ":" + mins + ":" + secs;

		var alarm = (timekeeper.hour*60*60) + (timekeeper.minute*60) + (timekeeper.second*1);
		if(timekeeper.now > alarm){
			// src = 'bensound-happyrock.mp3';
			// audio = new Audio(src);
			audio.play();
			alert('Time up! Press reset to stop the notification sound');
			timekeeper.resetFunction();
		}
	},

	start: function(){
		timekeeper.hour = document.getElementById('hour').value;
		timekeeper.minute = document.getElementById('minute').value;
		timekeeper.second = document.getElementById('second').value;
		timekeeper.timer = setInterval(timekeeper.tick, 1000);
	    timekeeper.go.value = "Stop";
	    timekeeper.go.removeEventListener("click", timekeeper.start);
	    timekeeper.go.addEventListener("click", timekeeper.stop);
	},

	stop: function(){
		clearInterval(timekeeper.timer);
	    timekeeper.timer = null;
	    timekeeper.go.value = "Start";
	    timekeeper.go.removeEventListener("click", timekeeper.stop);
	    timekeeper.go.addEventListener("click", timekeeper.start);
	},

	resetFunction: function(){
		clearInterval(timekeeper.timer);
		timekeeper.timer = null;
		timekeeper.hour = timekeeper.minute = timekeeper.second = 0;
		document.getElementById('hour').value = document.getElementById('minute').value = document.getElementById('second').value = 0;
		timekeeper.now = null;
		timekeeper.time.innerHTML = "00:00:00";
		timekeeper.go.value = "Start";
	    timekeeper.go.removeEventListener("click", timekeeper.stop);
	    timekeeper.go.addEventListener("click", timekeeper.start);
	    audio.pause();
	}
};

window.addEventListener("load",timekeeper.initialize);

