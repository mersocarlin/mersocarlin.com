---
title: 'A tale of JavaScript errors'
excerpt: 'Meet @mersocarlin/api-error. The lib that encapsulates API errors into named errors.'
date: '2020-08-06T00:00:00.000Z'
images:
  coverUrl: '/assets/blog/a-tale-of-javascript-errors-cover.jpg'
  ogUrl: '/assets/blog/a-tale-of-javascript-errors-og.jpg'
---

Handling errors is probably one the first things we (Software Engineers) should think of when working on new features.

"Happy path" is sure to be working but there's always room for those sneaky errors: missing or invalid arguments, string length, schema validation, response codes from API calls...

In this blog post, I'd like to focus on the last item from that list: response codes from API calls.

Let's use the following example: we have a `fetchUserProfile` method which takes a `profileId` argument that needs to be sent via an API call to a fake `profileService` endpoint.

If the response is successful we simply return it.
Otherwise we need to handle the error based on the status code returned by the API.

To make things interesting, for each type of status code we need to return a "human-readable" error message back to the client that has initially made the call.

```ts
class CustomError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)

    this.statusCode = statusCode || 500
  }
}

function fetchUserProfile(profileId: string) {
  try {
    return profileService.fetchProfile(profileId)
  } catch (error) {
    switch (error.statusCode) {
      case 400:
        throw new CustomError('Malformed profile id', error.statusCode)
      case 401:
        throw new CustomError(
          'Invalid or expired access token',
          error.statusCode,
        )
      case 403:
        throw new CustomError(
          'You do not have permission to access this profile',
          error.statusCode,
        )
      case 404:
        throw new CustomError('Profile not found', error.statusCode)
      default:
        throw new CustomError('Internal server error', error.statusCode)
    }
  }
}
```

`CustomError` object gets the job done: it encapsulates the custom message and status code into an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object which is then thrown back to the client. 

After doing this so many times, i.e., copy + paste of the same `CustomError` object throughout all of my repositories and projects over and over, I realised I could extract it into a simple and reusable lib.

Moreover, I could finaly give proper names to all of those errors such as `BadRequestError`, `UnauthorizedError`, `ForbiddenError`, `NotFoundError` and many more...

With that in mind, I created [@mersocarlin/api-error](https://github.com/mersocarlin/api-error) for dealing with different types of status codes by using named error types.

Nothing drastically would change, but the final result would be:

```ts
import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from '@mersocarlin/api-error'

function fetchUserProfile(profileId: string) {
  try {
    return profileService.fetchProfile(profileId)
  } catch (error) {
    switch (error.statusCode) {
      case 400:
        throw new BadRequestError('Malformed profile id', error)
      case 401:
        throw new UnauthorizedError('Invalid or expired access token', error)
      case 403:
        throw new ForbiddenError(
          'You do not have permission to access this profile',
          error,
        )
      case 404:
        throw new NotFoundError('Profile not found', error)
      default:
        throw new InternalServerError('Internal server error', error)
    }
  }
}
```

The original error as well as stack trace are all still available should you need them as all of the error types derive from the same [api-error](https://github.com/mersocarlin/api-error/blob/master/src/api-error.ts) object.

Did you like the idea? Would like to contribute? 

You can find everything you need to know in [api-error](https://github.com/mersocarlin/api-error)'s repository.

Thanks for reading,

Happy coding!
