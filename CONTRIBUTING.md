# Contributing to mersocarlin.com

1. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this repository to your own GitHub account and then [clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) it to your local device.
2. Create a new branch (`git checkout -b YOUR_BRANCH_NAME`).
3. Install yarn: `npm install -g yarn`.
4. Run `yarn` to install dependencies.
5. Run `yarn dev` to start the project.
6. Navigate to http://localhost:3000/

## Adding blog posts

1. Copy [YYYY-MM-DD-blog-post-template.mdx](https://github.com/mersocarlin/mersocarlin.com/blob/master/data/YYYY-MM-DD-blog-post-template.mdx) file and paste it in the [posts](https://github.com/mersocarlin/mersocarlin.com/tree/master/data/posts) folder.
2. Rename the file accordingly by replacing the blog post date and slug.

### In the template file

1. Update the blog post title.
2. Add a sample `excerpt` on what the blog post is about.
3. Use [Markdown syntax](https://daringfireball.net/projects/markdown/syntax).

The template has some mocked text as well as an embedded image for you to get started with.

### Adding cover and open graph images

I made it easy for me to create images in a specific folder so I don't have to manually set urls in the mdx file definition for every blog post.

1. Create a folder matching the blog post mdx file name in [assets/blog](https://github.com/mersocarlin/mersocarlin.com/tree/master/public/assets/blog).
2. Cover image should be 1000px width and 500px height and name it `cover.jpg`.
3. Open graph image should be 200px width and 200px height and name it `og.jpg`.

### Links inside the blog post

- All external links will open in a new tab by default.
- All internal links will open in the same tab.
