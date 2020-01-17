
$docsify.plugins = [].concat(function (hook, vm) {
    hook.init(function () {

        if (!window.$docsify.bitbucket) {
            window.$docsify.bitbucket = {};
        }

        // make page relative references works on index page
        if (location.href.endsWith("index.html")) {
            location.href = location.href.replace(/[^\/]*$/, "");
        }
        // docsify (or themeble) workaround, logo missing is no name parameter set
        if (!window.$docsify.name) {
            window.$docsify.name = ' ';
        }

        // detect repo from document location
        var found = location.pathname.match(/^\/pages\/([^/]+)\/([^/]+)\/([^/]+(\/[^/]+)*)\/browse.*$/);
        var project = found && found[1]
        var repository = found && found[2]
        var branch = found && found[3]

        var protocol = location.protocol;
        var host = location.host;


        if (!window.$docsify.repo && branch && !window.$docsify.bitbucket.noRepo) {
            window.$docsify.repo = protocol + "//" + host + "/projects/" + project + "/repos/" + repository;
        } else if (window.$docsify.repo) {
            // parse project and repository from repo parameter
            var a = document.createElement('a');
            a.href = window.$docsify.repo;
            found = a.pathname.match(/^\/(projects|users)\/([^/]+)\/repos\/([^/]+)[/]?$/);
            project = found && found[2];
            repository = found && found[3];
            branch = undefined;

            if (project && found[1] == "users") {
                project = '~' + project;
            }

            protocol = a.protocol;
            host = a.host;
        }

        // store properties for other hooks
        window.DocsifyBitbucket = {
            protocol: protocol, host: host, project: project, repository: repository, branch: branch
        };

        // set project avatar as default logo
        if (window.$docsify.repo && !window.$docsify.logo && !window.$docsify.bitbucket.noLogo) {
            window.$docsify.logo = avatarPrefix() + "256";
        }

        // set project avatar as default favicon
        if (window.$docsify.repo && !window.$docsify.bitbucket.noFavicon) {
            var favicon = document.querySelector("link[rel='shortcut icon']");
            if (!favicon) {
                favicon = document.createElement("link");
                favicon.setAttribute("rel", "shortcut icon");
                document.querySelector("head").appendChild(favicon);
            }
            favicon.setAttribute("href", avatarPrefix() + '64');
        }
    });

    hook.mounted(function () {

        if (window.$docsify.repo && !window.$docsify.bitbucket.noCorner) {
            var a = document.querySelector("a.github-corner");
            if (a) {
                a.innerHTML = '<svg width="250" height="250" viewBox="0 0 66.146 66.146"><path d="M0 0l66.146 66.146.067-66.08z"/><path d="M44.65 33.732c-1.11-.197-2.53-.635-3.416-1.054s-1.792-1.26-1.94-1.8c-.25-.91-.957-4.886-.923-5.184.052-.453.46-.464 1.135-.03C41.59 27 44.263 27.76 47.3 27.877c3.398.132 6.878-.728 9.102-2.25.555-.38.907-.4.907-.055 0 .55-.958 5.25-1.146 5.62-.544 1.072-2.465 2.017-5.08 2.497-1.523.28-4.96.3-6.435.04zm.707-8.124c-2.776-.38-4.14-.746-5.822-1.565-.967-.47-2.027-1.363-2.222-1.868-.07-.18-.24-1.015-.38-1.857l-.597-3.533L35.22 9.86c-.146-1.02-.144-1.207.014-1.585.24-.577.46-.805 1.272-1.335 2.5-1.635 8.175-2.574 13.454-2.23 2.896.19 4.31.417 6.407 1.032 2.144.63 3.848 1.745 4.11 2.69.14.508-.074 2.022-1.342 9.47-.79 4.65-.695 4.31-1.405 5.002-1.07 1.044-3.128 1.933-5.642 2.436-.932.187-1.77.248-3.787.277-1.425.02-2.75.015-2.944-.01zm3.7-2.898c1.52-.472 2.826-2.256 2.826-3.863 0-1.06-.7-2.525-1.5-3.133-1.9-1.442-4.695-1.026-5.904.875-2.084 3.275.898 7.263 4.577 6.12zm-2.073-2.204c-.654-.297-1.02-.84-1.083-1.61-.062-.742.24-1.377.856-1.8.554-.38 1.572-.38 2.127 0 1.26.864 1.133 2.8-.227 3.407-.265.12-.642.22-.836.22s-.57-.1-.836-.22zm5.43-10.664c1.577-.262 2.177-.42 2.8-.732 1.352-.677.886-1.408-1.235-1.935-3.11-.774-9.2-.774-12.32 0-1.075.267-1.5.463-1.838.826-.79.874 1.596 1.784 5.407 2.063 1.33.097 6.164-.052 7.184-.22z" fill="#fff"/></svg>';
            }
        }
    });

    hook.ready(function () {

        // set HTML title if empty
        var title = document.querySelector("#main h1");
        if (title && !document.title && !window.$docsify.bitbucket.noTitle) {
            document.title = title.innerText;
            if (window.$docsify.name == ' ') {
                window.$docsify.name = title.innerText;
            }
        }

        // workaround for missing logo image
        var logo = document.querySelector("h1.app-name img");
        if (logo && !logo.complete) {
            logo.style.display = 'none';
            logo.onload = function () {
                this.style.display = 'block';
            }
        }
    });

    hook.beforeEach(function (content) {

        if ( window.$docsify.bitbucket.noLink ) {
            return content;
        }
        
        var defs = window.DocsifyBitbucket;

        var found;
        
        while ( found = content.match(/\(\/;([a-z]=[a-zA-Z~\-_]+);([a-z]=[a-zA-Z~\-_]+)?;?([a-z]=[a-zA-Z~\-_]+)?/) ) {
            let project, repository, branch;
            for(var i = 1; i < found.length; i++) {
                if ( ! found[i] ) {
                    continue;
                }
                if (found[i].startsWith('p=')) {
                    project = found[i].substr(2);
                }
                if (found[i].startsWith('r=')) {
                    repository = found[i].substr(2);
                }
                if (found[i].startsWith('b=')) {
                    branch = found[i].substr(2);
                }
            }
            project = project || defs.project;
            repository = repository || defs.repository;
            //branch = branch || defs.branch;
            branch = branch || 'master';
            content = content.replace(found[0], "(" + defs.protocol + "//" + defs.host + "/pages/" + project + "/" + repository + "/" + branch + "/browse")
        }
        
        return content;
    });

    // returns the project avatar picture prefix (with size parameter but without value)
    function avatarPrefix() {
        var props = window.DocsifyBitbucket;
        var prefix = props.protocol + "//" + props.host;
        if (props.project.startsWith('~')) {
            prefix += "/users/" + props.project.substr(1);
        } else {
            prefix += "/projects/" + props.project;
        }
        return prefix + "/avatar.png?s=";
    }

}, $docsify.plugins);
