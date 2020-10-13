import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewEstimate from './ViewEstimate'

describe(`ViewEstimate component`, () => {
  const props = {
    estimate: {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Estimate One",
        "project_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "contractor_name": "Mike's Plumbing",
        "price": "10,000",
        "details": "Can start next week",
        "total_time": "Four Weeks"
        },
  };

  it('renders a .ViewEstimate by default', () => {
    const wrapper = shallow(<ViewEstimate />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a estimate with estimate prop', () => {
    const estimate = shallow(<ViewEstimate {...props} />)
      .find('Estimate');
    expect(toJson(estimate)).toMatchSnapshot();
  });
});