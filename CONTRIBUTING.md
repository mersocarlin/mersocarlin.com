# Contributing to mersocarlin.com

1. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this repository to your own GitHub account and then [clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) it to your local device.
2. Create a new branch (`git checkout -b YOUR_BRANCH_NAME`).
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the project.
5. Navigate to http://localhost:3000/

## Adding blog posts

1. Copy [YYYY-MM-DD-blog-post-template.mdx](https://github.com/mersocarlin/mersocarlin.com/blob/master/data/YYYY-MM-DD-blog-post-template.mdx) file and paste it in the [blog](https://github.com/mersocarlin/mersocarlin.com/tree/master/data/blog) folder.
2. Rename the file accordingly by replacing the blog post date and slug.

### In the template file

1. Update the blog post title.
2. Add a sample `excerpt` on what the blog post is about.
3. Use [Markdown syntax](https://daringfireball.net/projects/markdown/syntax).
4. Pick one or more tags that best categorise the blog post.

The template has some mocked text as well as an embedded image for you to get started.

### Blog post images

1. Create a folder matching the blog post mdx file name in [assets/blog](https://github.com/mersocarlin/mersocarlin.com/tree/master/public/assets/blog).
2. Cover image should be 1000px width and 500px height and name it `cover.jpg`.
3. Open graph image should be 200px width and 200px height and name it `og.jpg`.
4. Make sure to give credit to the person/company you took the post cover image from.

### Links inside the blog post

- All external links will open in a new tab by default.
- All internal links will open in the same tab.
