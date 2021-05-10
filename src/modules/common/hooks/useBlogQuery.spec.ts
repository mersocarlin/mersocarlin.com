import { act, renderHook } from '@testing-library/react-hooks'

import useBlogQuery from './useBlogQuery'

const useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')

function mockRouter(props = {}) {
  useRouterSpy.mockImplementationOnce(() => ({
    query: {},
    ...props,
  }))
}

describe('useBlogQuery', () => {
  it('should return initial hook result', () => {
    mockRouter()

    const { result } = renderHook(() => useBlogQuery())
    expect(result.current).toEqual({
      query: {
        q: '',
        tag: undefined,
      },
      updateQuery: expect.any(Function),
    })
  })

  it('should return "q" and "tag" from query string', () => {
    mockRouter({
      query: {
        q: 'somequery',
        tag: 'javascript',
      },
    })

    const { result } = renderHook(() => useBlogQuery())
    expect(result.current).toEqual({
      query: {
        q: 'somequery',
        tag: 'javascript',
      },
      updateQuery: expect.any(Function),
    })
  })

  it('should update query', () => {
    const mockReplace = jest.fn()
    mockRouter({
      query: {
        q: 'somequery',
      },
      replace: mockReplace,
    })

    const { result } = renderHook(() => useBlogQuery())

    act(() => {
      result.current.updateQuery({
        q: 'newquery',
        tag: 'typescript',
      })
    })

    expect(mockReplace).toHaveBeenCalledWith(
      `/blog?q=newquery&tag=typescript`,
      undefined,
      {
        shallow: true,
      },
    )
  })
})
