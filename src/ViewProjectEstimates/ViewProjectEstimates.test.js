import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewProjectEstimates from './ViewProjectEstimates';

describe(`ViewProjectEstimates component`, () => {
  const props = {
    estimates: [
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Estimate One",
        "project_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "contractor_name": "Mike's Plumbing",
        "price": "10,000",
        "details": "Can start next week",
        "total_time": "Four Weeks"
      },
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Estimate Two",
        "project_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "contractor_name": "Mike's Plumbing",
        "price": "10,000",
        "details": "Can start next week",
        "total_time": "Four Weeks"
      },
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Estimate Three",
        "project_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "contractor_name": "Mike's Plumbing",
        "price": "10,000",
        "details": "Can start next week",
        "total_time": "Four Weeks"
      },
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Estimate Four",
        "project_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "contractor_name": "Mike's Plumbing",
        "price": "10,000",
        "details": "Can start next week",
        "total_time": "Four Weeks"
      },
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Estimate Five",
        "project_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "contractor_name": "Mike's Plumbing",
        "price": "10,000",
        "details": "Can start next week",
        "total_time": "Four Weeks"
      },
    ]
  };

  it('renders a .ViewProjectEstimates by default', () => {
    const wrapper = shallow(<ViewProjectEstimates />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a estimate in ul for each estimate in array', () => {
    const ul = shallow(<ViewProjectEstimates {...props} />)
      .find('ul');
    expect(toJson(ul)).toMatchSnapshot();
  });
});
