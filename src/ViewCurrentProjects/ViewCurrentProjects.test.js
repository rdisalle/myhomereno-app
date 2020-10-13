import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewCurrentProjects from './ViewCurrentProjects';

describe(`ViewCurrentProjects component`, () => {
  const props = {
    projects: [
      {
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
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My Project 2',
        "estimated_cost": '$10,000',
        "total_time": '4 weeks',
        "room":'Bathroom',
        "details": 'Entire bath reno',
        "type": 'Contactor',
        "status": 'In Progress',
        "summary": 'Getting bathroom redone',
      },
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My Project 3',
        "estimated_cost": '$10,000',
        "total_time": '4 weeks',
        "room":'Bathroom',
        "details": 'Entire bath reno',
        "type": 'Contactor',
        "status": 'In Progress',
        "summary": 'Getting bathroom redone',
      },
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My Project 4',
        "estimated_cost": '$10,000',
        "total_time": '4 weeks',
        "room":'Bathroom',
        "details": 'Entire bath reno',
        "type": 'Contactor',
        "status": 'In Progress',
        "summary": 'Getting bathroom redone',
      },
    ]
  };

  it('renders a .ViewCurrentProjectList by default', () => {
    const wrapper = shallow(<ViewCurrentProjects />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a Project in ul for each project in array', () => {
    const ul = shallow(<ViewCurrentProjects {...props} />)
      .find('ul');
    expect(toJson(ul)).toMatchSnapshot();
  });
});