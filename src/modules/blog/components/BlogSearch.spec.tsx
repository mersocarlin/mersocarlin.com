import { configure, fireEvent, render, screen } from '@testing-library/react'

import BlogSearch from './BlogSearch'

configure({
  testIdAttribute: 'data-test-id',
})

describe('BlogSearch', () => {
  let mockOnChange: jest.Mock

  function renderComponent(props = {}) {
    render(<BlogSearch onChange={() => {}} value={{ q: '' }} {...props} />)
  }

  beforeEach(() => {
    mockOnChange = jest.fn()
  })

  it('should update query on text change', () => {
    renderComponent({
      onChange: mockOnChange,
    })

    fireEvent.change(screen.getByTestId('blog-search-input'), {
      target: {
        value: 'new search',
      },
    })

    expect(mockOnChange).toHaveBeenCalledWith({
      q: 'new search',
      tag: undefined,
    })
  })

  it('should update query on tag click', () => {
    renderComponent({
      onChange: mockOnChange,
    })

    fireEvent.click(screen.getByTestId('blog-search-tag-javascript'))

    expect(mockOnChange).toHaveBeenCalledWith({
      q: '',
      tag: 'javascript',
    })
  })

  it('should remove tag from query if already selected', () => {
    renderComponent({
      onChange: mockOnChange,
      value: { q: '', tag: 'javascript' },
    })

    fireEvent.click(screen.getByTestId('blog-search-tag-javascript'))

    expect(mockOnChange).toHaveBeenCalledWith({
      q: '',
      tag: undefined,
    })
  })
})
