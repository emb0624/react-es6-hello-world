const Welcome = require('../ExampleComponent.jsx');
const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const shallowRenderer = TestUtils.createRenderer();

shallowRenderer.render(React.createElement(Welcome, { name: 'bob' }));

const component = shallowRenderer.getRenderOutput();

describe('Welcome Test', () => {

  it('should display a welcome message with the person\'s name', () => {
    expect(component.props.children[0]).to.equal('Welcome to React ');
    expect(component.props.children[1]).to.equal('Bob');
    expect(component.props.children[2]).to.equal('!');
  });
});
