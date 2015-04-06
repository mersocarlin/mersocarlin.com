var React = require('react');
var TestUtils = React.addons.TestUtils;
var Mersocarlin = require('../lib/mersocarlin.jsx');


describe("Mersocarlin", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <Mersocarlin name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('mersocarlin');
  });
});
