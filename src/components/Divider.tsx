import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledDivider = styled.hr`
  background-color: var(--background-text);
  border: none;
  flex-shrink: 0;
  height: 1px;
  margin: 0;
`

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
    marginBottom: size || 0,
    marginTop: size || 0,
  }

  return (
    <Fragment>
      {position === 'top' && <StyledDivider style={componentStyles} />}

      {children}

      {position === 'bottom' && <StyledDivider style={componentStyles} />}
    </Fragment>
  )
}

export default Divider
