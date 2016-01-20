describe("expandyDancer", function(){
  
  var expandyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function(){  
    clock = sinon.useFakeTimers();
    expandyDancer = new ExpandyDancer(10, 20, timeBetweenSteps) 
  })

  it("should have a jQuery $node object", function(){
    expect(expandyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it loop", function(){
    sinon.spy(expandyDancer.$node, "animate");
    expandyDancer.step();
    expect(expandyDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(expandyDancer, "step");
      expect(expandyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(expandyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(expandyDancer.step.callCount).to.be.equal(2);
    });
  });
})