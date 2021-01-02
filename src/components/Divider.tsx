import React, { Fragment } from 'react'

interface DividerProps {
  children?: React.ReactNode
  position?: 'top' | 'bottom'
  size?: number
}

function Divider({
  children = undefined,
  position = 'bottom',
  size = 0,
}: DividerProps) {
  const componentStyles = {
    height: 1,
    marginBottom: size || 0,
    marginTop: size || 0,
  }

  return (
    <Fragment>
      {position === 'top' && (
        <div className="bg-gray-500 dark:bg-gray-200" style={componentStyles} />
      )}

      {children}

      {position === 'bottom' && (
        <div className="bg-gray-500 dark:bg-gray-200" style={componentStyles} />
      )}
    </Fragment>
  )
}

export default Divider
