import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Image from '../../src/components/image';

function setup() {
  const props = {
    src: 'http://www.example.com/images/me.png',
  };
  
  const enzymeWrapper = shallow(
    <Image {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('components -> image', () => {
  it('should render self and subcomponents with initial state', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('div').hasClass('image-component')).to.be.equal(true);
    expect(enzymeWrapper.find('Loader')).to.not.be.null;

    const imgProps = enzymeWrapper.find('img').props();
    expect(imgProps).to.have.property('alt', '');
    expect(imgProps).to.have.property('className', 'ui medium circular image fadeIn animated hidden');
    expect(imgProps).to.have.property('src', 'http://www.example.com/images/me.png');
  });

  it('should render self and subcomponents after image has been loaded', () => {
    const { enzymeWrapper } = setup();

    enzymeWrapper.find('img').simulate('load');

    expect(enzymeWrapper.find('div').hasClass('image-component')).to.be.equal(true);
    expect(enzymeWrapper.find('Loader')).to.have.length(0);

    const imgProps = enzymeWrapper.find('img').props();
    expect(imgProps).to.have.property('alt', '');
    expect(imgProps).to.have.property('className', 'ui medium circular image fadeIn animated');
    expect(imgProps).to.have.property('src', 'http://www.example.com/images/me.png');
  });
});
