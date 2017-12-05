# js-forms

This module contains some helper methods I wrote when doing some slightly unorthodox work with forms and javascript in ASP.NET Core.

However, some of it can be quite helpful in a reusable manner, so here it is, on github and npm, for the world to see, use and contribute to.

At this stage, because this is really just me packaging up the code I needed in my original project, there are some major caveats, but hopefully over time, possibly with contributions, this will improve.


# Usage

1. Acquire `js-forms.js` from source, or `npm install js-forms`
1. Have a node.js modules (UMD stylee) workflow, such as Browserify
1. Use only browsers that support the ES2015 features in the code, or else transpile down using Babel or similar in your workflow.
1. Use the exported methods!
1. ????
1. PROFIT!


# Caveats

The caveats are pretty clearly covered above, but in more detail:

- The project this was written for uses Browserify, so `js-forms` is written like a node module **only**. It expects a node-like environment.
- The project this was written for uses Babel.js, so `js-forms` is liberally written in ES2015 or newer. Notable "modern" JS features I can think it uses are:
    - `...` ellipsis for arguments
    - arrow function declarations
    - `let` and `const`
    - `for ... of`
    - `for ... in`
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

