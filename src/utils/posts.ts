import { Post, PostImage } from '@mersocarlin.com/types'

export function sortByDateDesc(post1: Post, post2: Post) {
  return post1.date > post2.date ? -1 : 1
}

/**
 * Remove date and extension from @fileName
 * @param fileName
 */
export function getSlugByFileName(fileName: string) {
  return fileName.substring(11).replace(/\.md$/, '')
}

/**
 * Get all previous slugs for a particular @fileName.
 * -------------
 * @allFiles contains all blogpost so it's just a matter of traversing the array and get the last 3
 * if index === 0: get items 3, 2 and 1
 * if index === 1: get items 3, 2 and 0
 * if index === 2: get items 3, 1 and 0
 * if index >= 3: get items index - 1, index - 2 and index - 3
 * @param allFiles
 * @param fileName
 */
export function getPreviousSlugs(allFiles: string[], fileName: string) {
  const indexOfSlug = allFiles.indexOf(fileName)

  if (indexOfSlug <= 2) {
    return allFiles
      .filter((_, index) => index <= 3 && index !== indexOfSlug)
      .map(getSlugByFileName)
  } else {
    return [
      getSlugByFileName(allFiles[indexOfSlug - 1]),
      getSlugByFileName(allFiles[indexOfSlug - 2]),
      getSlugByFileName(allFiles[indexOfSlug - 3]),
    ]
  }
}

export function getImages(fileName: string): PostImage {
  const folderName = fileName.replace(/\.md$/, '')

  return {
    coverUrl: `/assets/blog/${folderName}/cover.jpg`,
    ogUrl: `/assets/blog/${folderName}/og.jpg`,
  }
}
