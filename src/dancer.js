// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step(timeBetweenSteps);
  this.setPosition(top, left);

};

Dancer.prototype.step = function(timeBetweenSteps) {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
    
};  
Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  
  this.$node.css(styleSettings);
  this.top = top;
  this.left = left;
  this.checkForNeighbor();
};

Dancer.prototype.lineUp = function(){
  this.setPosition($("body").height() / 2, this.left);
};

Dancer.prototype.distance = function(dancer) {
    var deltaX = this.left - dancer.left;
    var deltaY = this.top - dancer.top;
    return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
  };

Dancer.prototype.checkForNeighbor = function() {
  var context = this;
  window.dancers.forEach(function(dancer) {

    if (context !== dancer && context.distance(dancer) < 30) {
      if (!context.$node.hasClass("white")) {
        context.$node.addClass("white");
        dancer.$node.addClass("white");
      }
    }
  });
 
};

