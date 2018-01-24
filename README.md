# js-forms

This module contains some helper methods I wrote when doing some slightly unorthodox work with forms and javascript in ASP.NET Core.

However, some of it can be quite helpful in a reusable manner, so here it is, on github and npm, for the world to see, use and contribute to.

At this stage, because this is really just me packaging up the code I needed in my original project, there are some major caveats, but hopefully over time, possibly with contributions, this will improve.


# Usage

1. `npm install js-forms`
1. The module is UMD wrapped, so require it in your favourite way
  - `const jsForms = require("js-forms");`
  - `import jsForms from 'js-forms';`
  - `<script src="../node_modules/js-forms/dist/js-forms.js"></script>`
  - ...
1. Use the exported methods
1. ????
1. PROFIT!


# Caveats

The caveats are pretty clearly covered above, but in more detail:

- The source is written in modern feature unrestricted ES.
    - The gulp build workflow transpiles down to support IE10+ (i.e. babel's "last 2 versions")
    - The `dist` version includes `object.entries` to shim that feature if browser support isn't there (looking at you, Edge)
    - Feel free to use the source if you don't want the ES5ish `dist` version
- I'm a .NET developer, not front-end, so I can't be sure it's super best practice javascript.


# FAQ

## What's `verificationTokenInputName`?

This code was written to be used in an ASP.NET Core project. That framework has helpers which, when creating forms in a view, add an AntiForgery token field. That field has a name, so I stuck it in a constant in case it needs referring to.


# Reference?

Right now the source is pretty simples, so look at `module.exports` to see what the "public" methods are, and then look at those methods implementations to get the gist.

When I get some time I'll write up a reference, or else YOU can and make a PR! :smile:


# Examples

When I get some time I'll tidy up some usage of this from existing projects to give examples of usage.


# Contribute

Yes please. Anybody dealing with the caveats above, wanting to add features, wanting to resolve issues that may be raised, etc... PLEASE MAKE PR's.

