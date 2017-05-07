// @flow
import React from 'react'

type PropsT = {
  icon: string,
  size?: string,
};

const Icon = ({ icon, size = '' }: PropsT) => (
  <i className={`${icon} ${size} icon`} />
)

Icon.defaultProps = {
  size: '',
}

export default Icon
