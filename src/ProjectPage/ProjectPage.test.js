import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProjectPage from './ProjectPage';

describe(`ProjectPage component`, () => {
  const props = {
    id: 1,
    name: 'test-class-name',
  };

  it('renders a .ProjectPage by default', () => {
    const wrapper = shallow(<ProjectPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the ProjectPage given props', () => {
    const wrapper = shallow(<ProjectPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});