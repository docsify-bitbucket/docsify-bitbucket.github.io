# docsify-bitbucket

[![NPM](https://img.shields.io/npm/v/docsify-bitbucket.svg?style=flat-square)](https://www.npmjs.com/package/docsify-bitbucket)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/szkiba/docsify-bitbucket/blob/master/LICENSE)

A [Docsify](https://docsify.js.org) plugin that help using [Docsify](https://docsify.js.org) with [Pages for Bitbucket Server](https://mohamicorp.atlassian.net/wiki/spaces/DOC/pages/771817567/Pages+for+Bitbucket+Server).

## Installation

Add following script tag to your `index.html` after docsify.

```html
<script src="https://unpkg.com/docsify-bitbucket"></script>
```

## Options

### Disable repo

If `repo` parameter is missing from Docsify configuration the plugin detect Butbucket Server repository URL and use it as Docsify repo parameter. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noRepo : true
  }
}
```

### Disable corner icon

If `repo` parameter is set (or detected) the plugin replaces the default GitHub repository corner picture with Bitbucket logo. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noCorner : true
  }
}
```

### Disable logo

If `logo` parameter is missing from Docsify configuration the plugin detect the Bitbucket project and use project's logo as Docsify logo parameter. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noLogo : true
  }
}
```

### Disable favicon

If `shortcut icon` HTML link element is missing from enclosing HTML document the plugin detect the Bitbucket project and use project's logo as shortcut icon (favicon). You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noFavicon : true
  }
}
```

### Link prefix

```javascript
window.$docsify = {
  bitbucket: {
    link : '//'
  }
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/szkiba/docsify-bitbucket/blob/master/LICENSE) for details.
