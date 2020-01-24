import React from 'react';
import { shallow } from 'enzyme';
import { IssueList } from '../IssueList';
import Issue from '../Issue';

describe('<IssueList />', () => {
  [
    {
      issueCount: 0,
      expectedEmpty: 1
    },
    {
      issueCount: 1,
      expectedEmpty: 0
    },
    {
      issueCount: 5,
      expectedEmpty: 0
    }
  ].forEach(({ issueCount, expectedEmpty }) => {
    it(`should render expected elements for ${issueCount} issues`, () => {
      const props = {
        issues: new Array(issueCount).fill(undefined).map(_ => ({}))
      };

      const wrapper = shallow(<IssueList {...props} />);

      expect(wrapper.find('EmptyView')).toHaveLength(expectedEmpty);
      expect(wrapper.find(Issue)).toHaveLength(issueCount);
    });
  });

  it('should render expected element when receiving error text', () => {
    const props = {
      issues: [{}],
      errorMessage: 'Some Error'
    };

    const wrapper = shallow(<IssueList {...props} />);

    expect(wrapper.find('ErrorView')).toHaveLength(1);
    expect(wrapper.find('EmptyView')).toHaveLength(0);
    expect(wrapper.find(Issue)).toHaveLength(0);
  });
});
