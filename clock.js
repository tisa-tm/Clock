var showCurrentTime = function(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var suffix = "AM";

    if(hour >= 12){
        suffix = "PM";
    }
    if(hour>12){
        hour = hour-12;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    var currentTime = hour + ':' + minutes + ':' + seconds + ' ' + suffix;
    clock.innerText = currentTime;
};
showCurrentTime();
setInterval(showCurrentTime,1000);

