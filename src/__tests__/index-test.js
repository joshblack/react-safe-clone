import React from 'react';
import { mount } from 'enzyme';
import SafeClone from '../';

describe('SafeClone', () => {
  let childOnClick;
  let Child;
  let Parent;
  let mockProps;

  beforeEach(() => {
    childOnClick = jest.fn();
    Child = props => <div {...props} />;
    Parent = props => (
      <SafeClone {...props}>
        <Child onClick={childOnClick} />
      </SafeClone>
    );
    mockProps = {
      onClick: jest.fn(),
    };
  });

  it('should not overwrite handlers on `Child` from `Parent`', () => {
    const wrapper = mount(<Parent {...mockProps} />);

    wrapper.find('div').simulate('click');
    expect(childOnClick).toHaveBeenCalled();
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
