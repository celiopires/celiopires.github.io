# Development Setup

This project uses Gulp to compile Pug templates to HTML and SCSS to CSS.

## Prerequisites

- Node.js and npm installed

## Installation

1. Install dependencies:
```bash
npm install
```

## Building the Project

**Build everything (HTML, CSS, sitemap):**
```bash
npm run build
```

Or using Gulp directly:
```bash
gulp build
```

**Build individual components:**
```bash
gulp html    # Compile Pug templates to HTML
gulp css     # Compile SCSS to CSS
gulp sitemapxml  # Generate sitemap.xml
```

**Watch mode (auto-compile on file changes):**
```bash
gulp
```

This will watch for changes in:
- `assets/scss/**/*.scss` → compiles to `assets/css/`
- `assets/pug/**/*.pug` → compiles to root directory as `.html`
- `*.html` → regenerates `sitemap.xml`

## Project Structure

- **Source files:**
  - `assets/pug/` - Pug templates (compiled to HTML in root)
  - `assets/scss/` - SCSS stylesheets (compiled to `assets/css/`)

- **Compiled files:**
  - `*.html` - Generated HTML files
  - `assets/css/` - Compiled CSS files
  - `sitemap.xml` - Auto-generated sitemap

