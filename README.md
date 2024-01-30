This repository contains Tiptap utilities and custom code in use by Aquifer.

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
