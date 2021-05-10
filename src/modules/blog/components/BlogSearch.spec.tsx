import { configure, fireEvent, render, screen } from '@testing-library/react'

import BlogSearch from './BlogSearch'

const useBlogQuerySpy = jest.spyOn(
  require('@common/hooks/useBlogQuery'),
  'default',
)

configure({
  testIdAttribute: 'data-test-id',
})

describe('BlogSearch', () => {
  it('should update query on text change', () => {
    const mockUpdateQuery = jest.fn()
    useBlogQuerySpy.mockImplementationOnce(() => ({
      query: {
        q: undefined,
        tag: undefined,
      },
      updateQuery: mockUpdateQuery,
    }))

    render(<BlogSearch />)

    fireEvent.change(screen.getByTestId('blog-search-input'), {
      target: {
        value: 'new search',
      },
    })

    expect(mockUpdateQuery).toHaveBeenCalledWith({
      q: 'new search',
      tag: undefined,
    })
  })

  it('should update query on tag click', () => {
    const mockUpdateQuery = jest.fn()
    useBlogQuerySpy.mockImplementationOnce(() => ({
      query: {
        q: undefined,
        tag: undefined,
      },
      updateQuery: mockUpdateQuery,
    }))

    render(<BlogSearch />)

    fireEvent.click(screen.getByTestId('blog-search-tag-javascript'))

    expect(mockUpdateQuery).toHaveBeenCalledWith({
      q: undefined,
      tag: 'javascript',
    })
  })

  it('should remove tag from query if already selected', () => {
    const mockUpdateQuery = jest.fn()
    useBlogQuerySpy.mockImplementationOnce(() => ({
      query: {
        q: undefined,
        tag: 'javascript',
      },
      updateQuery: mockUpdateQuery,
    }))

    render(<BlogSearch />)

    fireEvent.click(screen.getByTestId('blog-search-tag-javascript'))

    expect(mockUpdateQuery).toHaveBeenCalledWith({
      q: undefined,
      tag: undefined,
    })
  })
})
