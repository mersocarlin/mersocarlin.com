// @flow
import React from 'react'

type PropsT = {
  flag: string,
};

const FlagIcon = ({ flag }: PropsT) => (
  <i className={`flag ${flag}`} />
)

export default FlagIcon
