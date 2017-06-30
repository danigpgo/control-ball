
function Ball() {
  this.speed = 5;
  this.direction = 1;
  this._getPosition();
  this._getPosition2();
  this._getPosition3();
  this._getPosition4();
  this._getPositionDoor();
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

Ball.prototype._getPosition4 = function() {
  this.ballPosition = {
    top: $("#ball").position().top,
    left: $("#ball").position().left
  };
  this.arrowPosition4 = {
    top: $("#arrow4").position().top,
    left: $("#arrow4").position().left,
  };
};

Ball.prototype._getPositionDoor = function() {
  this.ballPosition = {
    top: $("#ball").position().top,
    left: $("#ball").position().left
  };
  this.doorPosition = {
    top: $("#door").position().top,
    left: $("#door").position().left,
  };
};


Ball.prototype._move = function() {
  var that = this;
  var intervalId = setInterval(function() {

    switch (that.direction) {
      case 1:
      // MOVER DERECHA //
        $("#ball").css({
          left: that.ballPosition.left += that.speed,
        });
        if (that._ballCollidesScreenRight()) {
          that.direction = 3;
          $('#collisionWall').play();

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
        else if (that._ballCollidesArrowRight4()) {
          that.direction = 1;
        }
        else if (that._ballCollidesDoorRight()) {
          that.direction = 5;
        }
        break;
      case 2:
      // MOVER ABAJO //
        $("#ball").css({
          top: that.ballPosition.top += that.speed,
        });
        if (that._ballCollidesScreenDown()) {
          that.direction = 4;
          $('#collisionWall').play();
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
        else if (that._ballCollidesArrowDown4()) {
          that.direction = 1;
        }
        else if (that._ballCollidesDoorDown()) {
          that.direction = 5;
        }
        break;
      case 3:
      // MOVER IZQUIERDA //
        $("#ball").css({
        left: that.ballPosition.left -= that.speed,
        });
        if (that._ballCollidesScreenLeft()) {
          that.direction = 1;
          $('#collisionWall').play();
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
        else if (that._ballCollidesArrowLeft4()) {
          that.direction = 1;
        }
        else if (that._ballCollidesDoorLeft()) {
          that.direction = 5;
        }
        break;
      case 4:
      // MOVER ARRIBA //
        $("#ball").css({
          top: that.ballPosition.top -= that.speed,
        });
        if (that._ballCollidesScreenUp()) {
          that.direction = 2;
          $('#collisionWall').play();
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
        else if (that._ballCollidesArrowUp4()) {
          that.direction = 1;
        }
        else if (that._ballCollidesDoorUp()) {
          that.direction = 5;
        }
        break;
        case 5:
        // WIN //
          $("#ball").css({
            top: that.ballPosition.top = that.doorPosition.top,
            left: that.ballPosition.left = that.doorPosition.left,
          });
          if (true) {
            document.querySelector('#word2').innerText = "You have the ball's control";
            $( "div" ).remove( "#word" );
            document.querySelector('#play2').innerText = "►  Ready for the next level?";
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
  this.ballPosition.top > this.arrowPosition3.top + 65 &&
  this.ballPosition.left > this.arrowPosition3.left &&
  this.ballPosition.left < this.arrowPosition3.left;
};



Ball.prototype._ballCollidesArrowRight4 = function() {
  this._getPosition4();
  return this.ballPosition.left + this.DIAMETER < this.arrowPosition4.left &&
    this.ballPosition.left + this.DIAMETER > this.arrowPosition4.left -5 &&
    this.ballPosition.top > this.arrowPosition4.top &&
    this.ballPosition.top < this.arrowPosition4.top + 55;
};

Ball.prototype._ballCollidesArrowLeft4 = function() {
  this._getPosition4();
  return this.ballPosition.left > this.arrowPosition4.left + 40 &&
  this.ballPosition.left < this.arrowPosition4.left + 65 &&
  this.ballPosition.top > this.arrowPosition4.top &&
  this.ballPosition.top < this.arrowPosition4.top + 55;
};

Ball.prototype._ballCollidesArrowDown4 = function() {
  this._getPosition4();
  return this.ballPosition.top + this.DIAMETER > this.arrowPosition4.top &&
  this.ballPosition.top < this.arrowPosition4.top -20 &&
  this.ballPosition.left > this.arrowPosition4.left &&
  this.ballPosition.left < this.arrowPosition4.left + 55;
};

Ball.prototype._ballCollidesArrowUp4 = function() {
  this._getPosition4();
  return this.ballPosition.top < this.arrowPosition4.top + 55 &&
  this.ballPosition.top > this.arrowPosition4.top +65 &&
  this.ballPosition.left > this.arrowPosition4.left &&
  this.ballPosition.left < this.arrowPosition4.left + 55;
};


Ball.prototype._ballCollidesDoorRight = function() {
  this._getPositionDoor();
  return this.ballPosition.left + this.DIAMETER < this.arrowPosition4.left &&
    this.ballPosition.left + this.DIAMETER > this.arrowPosition4.left -5 &&
    this.ballPosition.top > this.arrowPosition4.top &&
    this.ballPosition.top < this.arrowPosition4.top + 131;
};

Ball.prototype._ballCollidesDoorLeft = function() {
  this._getPositionDoor();
  return this.ballPosition.left > this.doorPosition.left + 40 &&
  this.ballPosition.left < this.doorPosition.left + 65 &&
  this.ballPosition.top > this.doorPosition.top &&
  this.ballPosition.top < this.doorPosition.top + 131;
};

Ball.prototype._ballCollidesDoorDown = function() {
  this._getPositionDoor();
  return this.ballPosition.top + this.DIAMETER > this.doorPosition.top &&
  this.ballPosition.top < this.doorPosition.top - 20 &&
  this.ballPosition.left > this.doorPosition.left &&
  this.ballPosition.left < this.doorPosition.left + 70;
};

Ball.prototype._ballCollidesDoorUp = function() {
  this._getPositionDoor();
  return this.ballPosition.top < this.doorPosition.top + 55 &&
  this.ballPosition.top > this.doorPosition.top + 100 &&
  this.ballPosition.left > this.doorPosition.left &&
  this.ballPosition.left < this.doorPosition.left + 70;
};


Ball.prototype._ballCollidesScreenRight = function() {
  return this.ballPosition.left > 1225;
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
