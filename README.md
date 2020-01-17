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

### Disable repository links

The plugin resolves special repository URLs to real Bitbucket Server URLs. Using this feature makes easy to link documents in other repositories either in same Bitbucket project or in another one. The first path segment (the first `/`) may have path parameters defined in [RFC 3986 -  Uniform Resource Identifier / 3.3 Path](https://tools.ietf.org/html/rfc3986#section-3.3). The following path segment parameters are handled by plugin:

parameter | value
----------|------------
p         | Bitbucket project key, project's short name or ~username for personal repositories
r         | Bitbucket git repository name
b         | Branch name


Repository URI format:

```
/;p=project;r=repository;b=branch/path
```

The project and branch part is optional but the repository part is required. The default value of the project is the project of the enclosing markdown document. The default value of the branch is the `main` branch.

Example for referencing main branch of repository *sample* in same project as referring document:

```
/;r=sample
```

The *path* part may conain any path relative to referred branch:

```
/;r=sample/docs/tutorial/intro
```

You can disable this feature:

```javascript
window.$docsify = {
  bitbucket: {
    noLink : true
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
