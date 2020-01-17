# docsify-bitbucket

[![NPM](https://img.shields.io/npm/v/docsify-bitbucket.svg?style=flat-square)](https://www.npmjs.com/package/docsify-bitbucket)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/szkiba/docsify-bitbucket/blob/master/LICENSE)

A [Docsify](https://docsify.js.org) plugin that help using [Docsify](https://docsify.js.org) with [Pages for Bitbucket Server](https://mohamicorp.atlassian.net/wiki/spaces/DOC/pages/771817567/Pages+for+Bitbucket+Server).

## Installation

Add following script tag to your `index.html` after docsify.

```html
<script src="//unpkg.com/docsify-bitbucket"></script>
```

## Options

### Disable repo

If `repo` parameter is missing from Docsify configuration then the plugin detect Butbucket Server repository URL and use it as Docsify repo parameter. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noRepo : true
  }
}
```

### Disable corner icon

If `repo` parameter is set (or detected) then the plugin replaces the default GitHub repository corner picture with Bitbucket logo. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noCorner : true
  }
}
```

### Disable logo

If `logo` parameter is missing from Docsify configuration then the plugin detect the Bitbucket project and use project's logo as Docsify logo parameter. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noLogo : true
  }
}
```

### Disable favicon

If `shortcut icon` HTML link element is missing from enclosing HTML document then the plugin detect the Bitbucket project and use project's logo as shortcut icon (favicon). You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noFavicon : true
  }
}
```

### Repository URI scheme

The plugin resolves special Bitbucket URIs to real Bitbucket Server URLs. Using this feature makes easy to link documents in other repositories either in same Bitbucket project or in another one. You can use Bitbucket URI in any markdown document including sidebar and navbar documents.

Bitbucket URI format:

```
bitbucket:{//project}{/repository}{/path}
```

The project part (authority element of the URI) is optional but the repository part is required. The default value of the project part is the project of the enclosing markdown document.

You can change the default `bitbucket` URI scheme:

```javascript
window.$docsify = {
  bitbucket: {
    scheme : 'scm' // default is `bitbucket`
  }
}
```

### Disable title

If `title` HTML element is missing from enclosing HTML document then the plugin set it based on the first markdown heading line of the current document. You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noTitle : true
  }
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/szkiba/docsify-bitbucket/blob/master/LICENSE) for details.
