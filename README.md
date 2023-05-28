# glob-chmod
Easily chmod a glob pattern - useful for Typescript not preserving file attributes on builds. Can be used with npx/yarn dlx

```
npx glob-chmod 755 build/bin/*
```

or

```
yarn dlx glob-chmod 755 build/bin/*
```

Just one dependency - glob. Written in circa 2000 Javascript, because it's just that simple.