import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProjectPage from './ProjectPage';

describe(`ProjectPage component`, () => {
  const props = {
    id: 1,
    name: 'test-class-name',
    date_created: new Date('2020-01-22T16:28:32.615Z'),
  };

  it('renders the ProjectPage given props', () => {
    const wrapper = shallow(<ProjectPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});