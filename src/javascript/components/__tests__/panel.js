const Panel = require('common/Panel.jsx');
const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const shallowRenderer = TestUtils.createRenderer();

shallowRenderer.render(React.createElement(Panel, { title: 'Hello world!' }));

const component = shallowRenderer.getRenderOutput();
// console.log(JSON.stringify(component, null, 2));

describe('Panel component', () => {

  it.skip('should display a title', () => {
    expect(component.props.children.length).to.equal(7);
  });
});
