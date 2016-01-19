var JumpyDancer = function(top, left, timeBetweenSteps  ){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.html('<img src="" height="20" width="20">');
  this.$node.addClass("jumpyDancer");
 
  this.up = false;
}

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer;
JumpyDancer.prototype.step = function(timeBetweenSteps){
    // call the old version of step at the beginning of any call to this new version of step
    
    Dancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.animate({ "top": "-=1px" }, "slow" );
    // this.$node.toggle("bounce", {times: 3}, "slow");
    
    if (this.up){
      this.$node.css({"top": "+=5px"})
      this.up = false;
    }else{
      this.$node.css({"top": "-=5px"});
      this.up = true;
    }
    
};