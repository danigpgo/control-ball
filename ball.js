function Ball() {
  this.speed = 5;
  this.direction = 1;
  this._getPosition();
  this._getPosition2();
  this._getPosition3();
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

Ball.prototype._getPosition2 = function() {
  this.ballPosition = {
    top: $("#ball").position().top,
    left: $("#ball").position().left
  };
  this.arrowPosition2 = {
    top: $("#arrow2").position().top,
    left: $("#arrow2").position().left,
  };
};

Ball.prototype._getPosition3 = function() {
  this.ballPosition = {
    top: $("#ball").position().top,
    left: $("#ball").position().left
  };
  this.arrowPosition3 = {
    top: $("#arrow3").position().top,
    left: $("#arrow3").position().left,
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
          that.direction = 3;
        }
        else if (that._ballCollidesArrowRight()) {
          that.direction = 4;
        }
        else if (that._ballCollidesArrowRight2()) {
          that.direction = 3;
        }
        else if (that._ballCollidesArrowRight3()) {
          that.direction = 2;
        }
        break;
      case 2:
      // MOVER ABAJO //
        $("#ball").css({
          top: that.ballPosition.top += that.speed / 2,
        });
        if (that._ballCollidesScreenDown()) {
          that.direction = 4;
        }
        else if (that._ballCollidesArrowDown()) {
          that.direction = 4;
        }
        else if (that._ballCollidesArrowDown2()) {
          that.direction = 3;
        }
        else if (that._ballCollidesArrowDown3()) {
          that.direction = 2;
        }
        break;
      case 3:
      // MOVER IZQUIERDA //
        $("#ball").css({
        left: that.ballPosition.left -= that.speed,
        });
        if (that._ballCollidesScreenLeft()) {
          that.direction = 1;
        }
        else if (that._ballCollidesArrowLeft()) {
          that.direction = 4;
        }
        else if (that._ballCollidesArrowLeft2()) {
          that.direction = 3;
        }
        else if (that._ballCollidesArrowLeft3()) {
          that.direction = 2;
        }
        break;
      case 4:
      // MOVER ARRIBA //
        $("#ball").css({
          top: that.ballPosition.top -= that.speed / 2,
        });
        if (that._ballCollidesScreenUp()) {
          that.direction = 2;
        }
        else if (that._ballCollidesArrowUp()) {
          that.direction = 4;
        }
        else if (that._ballCollidesArrowUp2()) {
          that.direction = 3;
        }
        else if (that._ballCollidesArrowUp3()) {
          that.direction = 2;
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



Ball.prototype._ballCollidesArrowRight2 = function() {
  this._getPosition2();
  return this.ballPosition.left + this.DIAMETER < this.arrowPosition2.left &&
    this.ballPosition.left + this.DIAMETER > this.arrowPosition2.left -5 &&
    this.ballPosition.top > this.arrowPosition2.top &&
    this.ballPosition.top < this.arrowPosition2.top + 55;
};

Ball.prototype._ballCollidesArrowLeft2 = function() {
  this._getPosition2();
  return this.ballPosition.left > this.arrowPosition2.left + 40 &&
  this.ballPosition.left < this.arrowPosition2.left + 65 &&
  this.ballPosition.top > this.arrowPosition2.top &&
  this.ballPosition.top < this.arrowPosition2.top + 55;
};

Ball.prototype._ballCollidesArrowDown2 = function() {
  this._getPosition2();
  return this.ballPosition.top + this.DIAMETER > this.arrowPosition2.top &&
  this.ballPosition.top < this.arrowPosition2.top -20 &&
  this.ballPosition.left > this.arrowPosition2.left &&
  this.ballPosition.left < this.arrowPosition2.left + 55;
};

Ball.prototype._ballCollidesArrowUp2 = function() {
  this._getPosition2();
  return this.ballPosition.top < this.arrowPosition2.top + 55 &&
  this.ballPosition.top > this.arrowPosition2.top +65 &&
  this.ballPosition.left > this.arrowPosition2.left &&
  this.ballPosition.left < this.arrowPosition2.left + 55;
};


Ball.prototype._ballCollidesArrowRight3 = function() {
  this._getPosition3();
  return this.ballPosition.left + this.DIAMETER < this.arrowPosition3.left &&
    this.ballPosition.left + this.DIAMETER > this.arrowPosition3.left -5 &&
    this.ballPosition.top > this.arrowPosition3.top &&
    this.ballPosition.top < this.arrowPosition3.top + 55;
};

Ball.prototype._ballCollidesArrowLeft3 = function() {
  this._getPosition3();
  return this.ballPosition.left > this.arrowPosition3.left + 40 &&
  this.ballPosition.left < this.arrowPosition3.left + 65 &&
  this.ballPosition.top > this.arrowPosition3.top &&
  this.ballPosition.top < this.arrowPosition3.top + 55;
};

Ball.prototype._ballCollidesArrowDown3 = function() {
  this._getPosition3();
  return this.ballPosition.top + this.DIAMETER > this.arrowPosition3.top &&
  this.ballPosition.top < this.arrowPosition3.top -20 &&
  this.ballPosition.left > this.arrowPosition3.left &&
  this.ballPosition.left < this.arrowPosition3.left + 55;
};

Ball.prototype._ballCollidesArrowUp3 = function() {
  this._getPosition3();
  return this.ballPosition.top < this.arrowPosition3.top + 55 &&
  this.ballPosition.top > this.arrowPosition3.top +65 &&
  this.ballPosition.left > this.arrowPosition3.left &&
  this.ballPosition.left < this.arrowPosition3.left + 55;
};


Ball.prototype._ballCollidesScreenRight = function() {
  return this.ballPosition.left > 1215;
};

Ball.prototype._ballCollidesScreenLeft = function() {
  return this.ballPosition.left < 0;
};

Ball.prototype._ballCollidesScreenDown = function() {
  return this.ballPosition.top > 370;
};


Ball.prototype._ballCollidesScreenUp = function() {
  return this.ballPosition.top < 1;
};
