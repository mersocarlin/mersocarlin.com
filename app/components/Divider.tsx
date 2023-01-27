import { Fragment } from 'react'
import type { PropsWithChildren } from 'react'

export default function Divider({
  children = undefined,
  position = 'bottom',
  size = 0,
}: PropsWithChildren & {
  position?: 'top' | 'bottom'
  size?: number
}) {
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
