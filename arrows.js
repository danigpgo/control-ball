function Arrows() {
  this._getPosition();

}

Arrows.prototype._getPosition = function() {
  this.ballPosition = {
    top: $("#ball").position().top,
    left: $("#ball").position().left
  };
  this.arrowPosition = {
    top: $(".arrow").position().top,
    left: $(".arrow").position().left,
  };
};


Arrows.prototype._ballCollidesArrowRight = function() {
  this._getPosition();
  return this.ballPosition.left + this.DIAMETER < this.arrowPosition.left &&
    this.ballPosition.left + this.DIAMETER > this.arrowPosition.left -5 &&
    this.ballPosition.top > this.arrowPosition.top &&
    this.ballPosition.top < this.arrowPosition.top + 55;
};

Arrows.prototype._ballCollidesArrowLeft = function() {
  this._getPosition();
  return this.ballPosition.left > this.arrowPosition.left + 40 &&
  this.ballPosition.left < this.arrowPosition.left + 65 &&
  this.ballPosition.top > this.arrowPosition.top &&
  this.ballPosition.top < this.arrowPosition.top + 55;
};

Arrows.prototype._ballCollidesArrowDown = function() {
  this._getPosition();
  return this.ballPosition.top + this.DIAMETER > this.arrowPosition.top &&
  this.ballPosition.top < this.arrowPosition.top -20 &&
  this.ballPosition.left > this.arrowPosition.left &&
  this.ballPosition.left < this.arrowPosition.left + 55;
};

Arrows.prototype._ballCollidesArrowUp = function() {
  this._getPosition();
  return this.ballPosition.top < this.arrowPosition.top + 55 &&
  this.ballPosition.top > this.arrowPosition.top +65 &&
  this.ballPosition.left > this.arrowPosition.left &&
  this.ballPosition.left < this.arrowPosition.left + 55;
};


Arrow.prototype._rightArrow = function () {

  if (that._ballCollidesArrowRight()) {
    that.direction = 1;
  }
  else if (that._ballCollidesArrowDown()) {
    that.direction = 1;
  }
  else if (that._ballCollidesArrowLeft()) {
    that.direction = 1;
  }
  else if (that._ballCollidesArrowUp()) {
    that.direction = 1;
  }
};

Arrow.prototype._downArrow = function () {

  if (that._ballCollidesArrowRight()) {
    that.direction = 2;
  }
  else if (that._ballCollidesArrowDown()) {
    that.direction = 2;
  }
  else if (that._ballCollidesArrowLeft()) {
    that.direction = 2;
  }
  else if (that._ballCollidesArrowUp()) {
    that.direction = 2;
  }
};


Arrow.prototype._LeftArrow = function () {

  if (that._ballCollidesArrowRight()) {
    that.direction = 3;
  }
  else if (that._ballCollidesArrowDown()) {
    that.direction = 3;
  }
  else if (that._ballCollidesArrowLeft()) {
    that.direction = 3;
  }
  else if (that._ballCollidesArrowUp()) {
    that.direction = 3;
  }
};

Arrow.prototype._UpArrow = function () {

  if (that._ballCollidesArrowRight()) {
    that.direction = 4;
  }
  else if (that._ballCollidesArrowDown()) {
    that.direction = 4;
  }
  else if (that._ballCollidesArrowLeft()) {
    that.direction = 4;
  }
  else if (that._ballCollidesArrowUp()) {
    that.direction = 4;
  }
};
