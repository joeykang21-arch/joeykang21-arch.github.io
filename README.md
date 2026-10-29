# joeykang21-arch.github.io

Personal website of Joseph Kang, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live at **https://joeykang21-arch.github.io/**. Every push to `main` rebuilds and deploys the site automatically ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). Check progress in the repo's **Actions** tab.

## Preview locally

Requires Node.js 22.23 or newer (24 recommended).

```sh
npm install        # first time only
npm run dev        # live preview at http://localhost:4321, reloads as you edit
npm run build      # production build into dist/ (same as the deploy)
npm run preview    # serve the built dist/ to double-check before pushing
```

## Add a blog post

1. Create a Markdown file in `src/content/writing/`. The filename becomes the URL: `my-new-post.md` is published at `/writing/my-new-post/`.
2. Start it with this frontmatter:

   ```md
   ---
   title: "My New Post"
   date: 2026-11-15
   description: "One or two sentences shown in the post list and in link previews."
   category: ai-safety   # or: personal
   draft: false          # true hides it from the site until you're ready
   ---

   Your post starts here. Use normal Markdown: ## headings, lists, links, tables, `code`.
   ```

3. Commit and push to `main`.

The post shows up on the Writing page under its category, on the home page if it's among the 3 newest, and in the RSS feed. Don't repeat the title as a `#` heading in the body, because the page already shows it.

To add images to a post, put them in `src/assets/` and reference them with a relative path, for example `![Alt text](../../assets/my-chart.png)`.

## Add a YouTube video

Edit [src/data/videos.yaml](src/data/videos.yaml) and add an entry:

```yaml
- id: wFZ_-d0vKNA            # the part after "watch?v=" in the URL
  title: "Video title"
  page: climbing             # climbing or life
  # section: skating         # life page only: skating, piano or lifting
```

Videos appear in the order they're listed. They load only when clicked, so adding more doesn't slow the page down.

## Change a photo caption or add a photo

- **Captions and alt text** live in [src/data/photos.yaml](src/data/photos.yaml). Replace `"TBD"` with your caption, or `""` for no caption.
- **New photo:** resize it to about 2000px on the long edge, save it as `src/assets/photos/<name>.jpg`, add a `<name>:` entry with `alt:` text to `photos.yaml`, and place it on a page with `<Photo id="<name>" />`. Astro generates the optimized sizes automatically.

## Where things live

| What | Where |
| --- | --- |
| Name, email, social links, nav | `src/site.ts` |
| Home page text and "Now" section | `src/pages/index.astro` |
| Research projects and publications | `src/pages/research.astro` (lists at the top of the file) |
| Experience, education, awards | `src/pages/work.astro` (lists at the top of the file) |
| Resume PDF | `public/resume.pdf` (replace the file to update it) |
| Colors, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| Raw source material | `materials/` (local only, not committed) |
