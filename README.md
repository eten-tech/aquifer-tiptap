This repository contains Tiptap utilities and custom code in use by Aquifer.

## TS Usage

It can be imported like a normal dependency to use in a JS/TS project.
This is most helpful for custom extensions.

## .NET Usage

Some specific utilities can be built and used in .NET.

1. Install dependencies: `yarn`
2. Build the utilities for the .NET server: `yarn build-for-aquifer-server`
3. Copy the `dist/TiptapUtilities.js` file into the .NET Aquifer server codebase.
4. Copy the following to your csproj file with the path to the js file:

```
<ItemGroup>
    <None Remove="TiptapUtilities.js" />
    <EmbeddedResource Include="TiptapUtilities.js" />
</ItemGroup>
```
