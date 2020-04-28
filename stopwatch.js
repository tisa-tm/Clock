var stopwatch = {
	reset: null,
	go: null,
	timer: null,
	now: 0,
	time: null,

	initialize: function(){
		stopwatch.reset = document.getElementById('reset');
		stopwatch.go = document.getElementById('go');
		stopwatch.time = document.getElementById('time');

		stopwatch.reset.addEventListener("click", stopwatch.resetFunction);
		// stopwatch.reset.disabled = false;
		stopwatch.go.addEventListener("click", stopwatch.start);
		// stopwatch.go.disabled = false;
	},

	tick: function(){
		stopwatch.now++;
		var remaining = stopwatch.now;
		var hours = Math.floor(remaining/3600);
		remaining = remaining - (hours*3600);
		var mins = Math.floor(remaining/60);
		remaining = remaining - (mins*60);
		var secs = remaining;

		if (hours<10) { hours = "0" + hours; }
    	if (mins<10) { mins = "0" + mins; }
    	if (secs<10) { secs = "0" + secs; }
		stopwatch.time.innerHTML = hours + ":" + mins + ":" + secs;
	},

	start: function(){
		stopwatch.timer = setInterval(stopwatch.tick, 1000);
	    stopwatch.go.value = "Pause";
	    stopwatch.go.removeEventListener("click", stopwatch.start);
	    stopwatch.go.addEventListener("click", stopwatch.stop);
	},

	stop: function(){
		clearInterval(stopwatch.timer);
	    stopwatch.timer = null;
	    stopwatch.go.value = "Resume";
	    stopwatch.go.removeEventListener("click", stopwatch.stop);
	    stopwatch.go.addEventListener("click", stopwatch.start);
	},

	resetFunction: function(){
		clearInterval(stopwatch.timer);
		stopwatch.time.innerHTML = "00:00:00";
		stopwatch.timer = null;
		stopwatch.now = null;	
		stopwatch.go.value = "Start";
	    stopwatch.go.removeEventListener("click", stopwatch.stop);
	    stopwatch.go.addEventListener("click", stopwatch.start);
	}
};

window.addEventListener("load",stopwatch.initialize);

