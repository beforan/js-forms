# js-forms

Some helpful functions for:

- Submitting js object properties as if they were fields in an HTML form.
- Getting (some or all of) the contents of an HTML form as a JSON object
  - which could then be sent in an AJAX POST instead of a form submission
  - or used for anything else!
- Submitting an HTML form with some (or all) form fields wrapped into a JSON object in a single text field

## Why is this useful?

Mainly for unorthodox client side interop with otherwise server pages, particularly when using React/Vue/Angular/KnockoutJS/whatever inside single server-loaded pages, as opposed to in an SPA context.

Imagine you have a server loaded page, with an HTML form, but you want some advanced client-side UI as part of the form.

You could write the scary frontend part in React, and then have form submissions send the React App's state object as well as the other form fields with ease.

# Usage

1. `npm install js-forms`
1. The package provides ESM, CommonJS and UMD versions; just use it in your normal way
   - `const jsForms = require("js-forms");`
   - `import * as jsForms from "js-forms";`
   - `<script src="../node_modules/js-forms/umd/js-forms.js"></script>`
   - ...
1. Use the exported methods
1. ????
1. PROFIT!

# Caveats

- The code uses [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) which isn't fully supported by older browsers
  - IE and Edge (Classic) are known to have issues.
  - [`formdata-polyfill`](https://www.npmjs.com/package/formdata-polyfill) can be used to resolve this. Just import it before using this module.

# FAQ

## What's `aspNetCoreCsrf`?

This code was originally written to be used in an ASP.NET Core project.

That framework has helpers which, when creating forms in a view, add a CSRF AntiForgery token field. That field has a name, so I stuck it in a constant in case it needs referring to.

# Reference?

Right now the source is pretty simples, so look at the public exports to get the gist.

When I get some time I'll write up a reference, or else YOU can and make a PR! :smile:

# Examples

When I get some time I'll tidy up some usage of this from existing projects to give examples of usage.

# Contribute

Yes please. Anybody dealing with the caveats above, wanting to add features, wanting to resolve issues that may be raised, etc... PLEASE MAKE PR's.
