// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
  this.checkForNeighbor();

};

Dancer.prototype.step = function(timeBetweenSteps){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
    
};  
Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    var styleSettings = {
      top: top,
      left: left
    };
    
    this.$node.css(styleSettings);
    this.top = top;
    this.left = left;
};

Dancer.prototype.lineUp = function(){
  this.setPosition(this.top, $("body").width() / 2);
};

Dancer.prototype.distance = function(dancer) {
    var deltaX = this.left - dancer.left;
    var deltaY = this.top - dancer.top;
    return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
  };

Dancer.prototype.checkForNeighbor = function() {
  var context = this;
  window.dancers.forEach(function(dancer) {

    if (context === dancer) {
      console.log('context:' + context);
      console.log('dancer:' + dancer);
    } else {
      console.log('should be jumping');
      if (context.distance(dancer) < 30) {
        context.$node.css({"border-color" : "white"});
        dancer.$node.css({"border-color" : "white"});
        var negOrPos = Math.random() < 0.5 ? -1 : 1;
        context.top += negOrPos * 50;
        context.left += negOrPos * 50;


        context.setPosition(context.top, context.left);
      }
    }
  });
  setTimeout(this.checkForNeighbor.bind(this), 1000);
};

