# [docsify-cli](https://github.com/docsifyjs/docsify-cli) <!-- {docsify-ignore-all} -->

> 🖌 docsify cli - A magical documentation generator.
> 
> Running a server on `localhost` with live-reload.

## Installation

Install `docsify-cli` via `npm` or `yarn` globally.

```shell
npm i docsify-cli -g
# yarn global add docsify-cli
```

## Usage

### `init` command

Use `init` to generate your docs.

```shell
docsify init <path> [--local false] [--theme vue]

# docsify i <path> [--local false] [--theme vue]
```

`<path>` defaults to the current directory. Use relative paths like `./docs` (or `docs`).

* `--local` option:
  * Shorthand: `-l`
  * Type: boolean
  * Default: `false`
  * Description: Copy `docsify` files to the docs path, defaults to `false` using `unpkg.com` as the content delivery network (CDN). To explicitly set this option to `false` use `--no-local`.
* `--theme` option:
  * Shorthand: `-t`
  * Type: string
  * Default: `vue`
  * Description: Choose a theme, defaults to `vue`, other choices are `buble`, `dark` and `pure`.

### `serve` command

Run a server on `localhost` with livereload.

```shell
docsify serve <path> [--open false] [--port 3000]

# docsify s <path> [--open false] [--port 3000]
```

* `--open` option:
  * Shorthand: `-o`
  * Type: boolean
  * Default: `false`
  * Description: Open the docs in the default browser, defaults to `false`. To explicitly set this option to `false` use `--no-open`.
* `--port` option:
  * Shorthand: `-p`
  * Type: number
  * Default: `3000`
  * Description: Choose a listen port, defaults to `3000`.

