function TimerCount() {
  this.timer = 25; // Game timer
  this.timeoutId = 0; // for cleaning timeouts
  this._checkTimer();
}


TimerCount.prototype._checkTimer = function() {
  document.querySelector('#word').innerText = this.timer;
  console.log(this.timer);
  if (this.timer > 0) {
    this.timer -= 1;
    this.timeoutId = setTimeout(this._checkTimer.bind(this), 1000);
  } else {
    document.querySelector('#word').innerText = "Time is over!";
    location.replace("gameover.html");
  }

};

TimerCount.prototype._checkTimeOut = function() {

};
