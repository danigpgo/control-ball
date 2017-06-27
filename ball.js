function Ball() {
  this.speed = 5;
  this.direction = 3;
  this._getPosition();
  this._move();
  this.DIAMETER = 45;
}


Ball.prototype._getPosition = function() {
  this.ballPosition = {
    top: $("#ball").position().top,
    left: $("#ball").position().left
  };
  this.arrowPosition = {
    top: $("#arrow1").position().top,
    left: $("#arrow1").position().left,
  };
};

Ball.prototype._move = function() {
  var that = this;
  var intervalId = setInterval(function() {
    switch (that.direction) {
      case 1:
      // MOVER DERECHA //
        $("#ball").css({
          left: that.ballPosition.left += that.speed / 2,
        });
        if (that._ballCollidesScreenRight()) {
          that._wallCollision();
        }
        if (that._ballCollidesArrowRight()) {
          that._toolCollision();
        }
        break;
      case 2:
      // MOVER ABAJO //
        $("#ball").css({
          left: that.ballPosition.top += that.speed / 2,
        });
        if (that._ballCollidesScreenDown()) {
          that._wallCollision();
        }
        if (that._ballCollidesArrowDown()) {
          that._toolCollision();
        }
        break;
      case 3:
      // MOVER IZQUIERDA //
        $("#ball").css({
        left: that.ballPosition.left -= that.speed,
        });
        if (that._ballCollidesScreenLeft()) {
          that._wallCollision();
        }
        if (that._ballCollidesArrowLeft()) {
          that._toolCollision();
        }
        break;
      case 4:
      // MOVER ARRIBA //
        $("#ball").css({
          left: that.ballPosition.top -= that.speed / 2,
        });
        if (that._ballCollidesScreenUp()) {
          Ball._wallCollision();
        }
        if (that._ballCollidesArrowUp()) {
          Ball._toolCollision();
        }
        break;
    }
  }, 20);
};


Ball.prototype._ballCollidesArrowRight = function() {
  this._getPosition();
  return this.ballPosition.left + this.DIAMETER < this.arrowPosition.left &&
    this.ballPosition.left + this.DIAMETER > this.arrowPosition.left -5 &&
    this.ballPosition.top > this.arrowPosition.top &&
    this.ballPosition.top < this.arrowPosition.top + 55;
};

Ball.prototype._ballCollidesArrowLeft = function() {
  this._getPosition();

  return this.ballPosition.left > this.arrowPosition.left + 40 &&
  this.ballPosition.left < this.arrowPosition.left + 65 &&
  this.ballPosition.top > this.arrowPosition.top &&
  this.ballPosition.top < this.arrowPosition.top + 55;
};

Ball.prototype._ballCollidesArrowDown = function() {
  this._getPosition();

  return this.ballPosition.top + this.DIAMETER > this.arrowPosition.top &&
  this.ballPosition.top < this.arrowPosition.top -20 &&
  this.ballPosition.left > this.arrowPosition.left &&
  this.ballPosition.left < this.arrowPosition.left + 55;
};

Ball.prototype._ballCollidesArrowUp = function() {
  this._getPosition();

  return this.ballPosition.top < this.arrowPosition.top + 55 &&
  this.ballPosition.top > this.arrowPosition.top +65 &&
  this.ballPosition.left > this.arrowPosition.left &&
  this.ballPosition.left < this.arrowPosition.left + 55;
};

Ball.prototype._ballCollidesScreenRight = function() {
  this._getPosition();

  return this.ballPosition.left > 1238;
};

Ball.prototype._ballCollidesScreenLeft = function() {
  this._getPosition();

  return this.ballPosition.left < 0;
};

Ball.prototype._ballCollidesScreenDown = function() {
  this._getPosition();

  return this.ballPosition.top > 380;
};


Ball.prototype._ballCollidesScreenUp = function() {
  this._getPosition();

  return this.ballPosition.top < 1;
};


Ball.prototype._wallCollision = function() {
  var that = this;
  switch (that.direction) {
    case 1:
      that.direction = 3;
      break;
    case 2:
      that.direction = 4;
      break;
    default:
    case 3:
      that.direction = 1;
      break;
    case 4:
      that.direction = 2;
      break;
  }
};
Ball.prototype._toolCollision = function() {
  var that = this;
    switch (that.direction) {
      case 1:
        that.direction = 3;
        break;
      case 2:
        that.direction = 4;
        break;
      case 3:
        that.direction = 1;
        break;
      case 4:
        that.direction = 2;
        break;
      default:
    }
};
