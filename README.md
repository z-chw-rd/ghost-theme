# Ghost Theme

Primarily uses [Handlebars](http://handlebarsjs.com/)

## Ghost Resources

- Official [theme documentation](https://ghost.org/docs/themes)
- [Tutorials](https://ghost.org/tutorials/) offer a step-by-step guide to building the most common features in Ghost themes
- All of Ghost's official themes are [open source](https://github.com/tryghost) and are a great reference for learning how to create a theme

## Theme features

🔁&nbsp;Livereload by default. See changes instantly in the browser whenever you save a file.

🗃️&nbsp;Write modern JavaScript. Use ESM out of the box to write more manageable Javascript.

🗜️&nbsp;Assets optimized automatically. JavaScript and CSS are minified and transpiled by default.

👟&nbsp;Fast compile times, powered by [Rollup](https://rollupjs.org).

🦋&nbsp;Write next-gen CSS for today's browsers with [PostCSS](https://postcss.org/). Add the CSS tools you love via [`rollup.config.js`](rollup.config.js).

➕&nbsp;Extensible by design. Rollup's configuration structure makes it easy to add [any number of plugins easily](https://github.com/rollup/plugins). 

## Theme structure

One neat trick is that you can create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-jamie.hbs` - Custom template for `/author/jamie/` archive

## Development guide

### Start development mode

From the theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

&nbsp;

### Build and test theme

Compile CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```
