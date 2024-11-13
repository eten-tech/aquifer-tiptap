This repository contains Tiptap utilities and custom code in use by Aquifer.

## TS Usage

It can be imported like a normal dependency to use in a JS/TS project. This is most helpful for custom extensions.

The expectation is that other projects will extend the custom types with more advanced functionality. For instance, `src/custom-extensions/bible-reference.ts` could be extended and displayed like a link with an onClick to show a popover with the verse inside.

## .NET Usage

Some .NET projects use this library as well, through JSEngine.
