import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewProject from './ViewProject';

describe(`ViewProjects component`, () => {
  const props = {
    projects: {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My Project 1',
        "estimated_cost": '$10,000',
        "total_time": '4 weeks',
        "room":'Bathroom',
        "details": 'Entire bath reno',
        "type": 'Contactor',
        "status": 'In Progress',
        "summary": 'Getting bathroom redone',
      },
  };

  it('renders a .ViewProject by default', () => {
    const wrapper = shallow(<ViewProject />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a Projects with project prop', () => {
    const project = shallow(<ViewProject {...props} />)
      .find('project');
    expect(toJson(project)).toMatchSnapshot();
  });
});