import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NavLink} from 'react-router-dom';

import Toolbar from './Toolbar';
import NavigationItems from '../NavigationItems/NavigationItems';

configure({adapter: new Adapter()});

describe('<Toolbar />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Toolbar/>);
  });

  it('should have a list of navigation items and a navigation link', () => {
    expect(wrapper.find(NavigationItems)).toBeDefined();
    expect(wrapper.find(NavLink)).toBeDefined();
  });
});

