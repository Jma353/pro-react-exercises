# Guide

This represents a simple "Hello world!" application with Babel configuration.  As a note, Babel is ECMAScript 6 to ECMAScript 5 transpiler, allowing one to utilize all ECMAScript 6 features in a Node.js environment, and have them run on any browser.  

## Setting Up

First, run the following to setup your `package.json`:

```
npm init -y
```

Install the following locally (a.k.a. with the `--save` flag)

```
npm install --save express
npm install --save babel-core babel- preset-es2015
```

Install the following globally (a.k.a. with the `--global` flag) for compiling files from the command line:

```
npm install --global babel-cli
```

Make a `.babelrc` configuration file with the following content:

```
{
  "presets": ["es2015"]
}
```

Finally, as a modification to our `package.json` file, we add the following line to our `"script"` sub-JSON:

```
"start": "DEBUG=express:* babel-node server.js"
```

This line allows us to run the applicaton via `npm start`.

## Content

The content of this configuration can be seen by viewing `server.js`
