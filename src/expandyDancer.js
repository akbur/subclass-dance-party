var ExpandyDancer = function (top, left, timeBetweenSteps) {
  this.big = false;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("expandyDancer");
};

ExpandyDancer.prototype = Object.create(Dancer.prototype);
ExpandyDancer.prototype.constructor = ExpandyDancer;

ExpandyDancer.prototype.step = function (timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  if (this.big) {
    this.$node.animate({"border-width":"-=40px", "border-radius":"-=40px"}, "slow");
    this.big = false;
  } else {
    this.$node.animate({"border-width":"+=40px", "border-radius":"+=40px"}, "slow");
    this.big = true;
  }
};
