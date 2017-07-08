// @flow
import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import classNames from 'classnames'

import Loader from './loader'

type InnerPropsT = {
  isLoading: boolean,
  onLoad: () => void,
  toggleLoading: (loading: boolean) => void,
}

type PropsT = {
  src: string,
} & InnerPropsT

const Image = ({ isLoading, src, onLoad }: PropsT) => {
  const imageClass = classNames('ui medium circular image fadeIn animated', {
    hidden: isLoading,
  })

  return (
    <div className="image-component">
      {isLoading && <Loader />}
      <img alt="" className={imageClass} src={src} onLoad={onLoad} />
    </div>
  )
}

export default compose(
  withState('isLoading', 'toggleLoading', true),
  withHandlers({
    onLoad: ({ toggleLoading }: PropsT) => () => toggleLoading(false),
  })
)(Image)
