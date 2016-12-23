# Guide

This represents a complete example involving server-side rendering of React.js.

## Setting Up

First, run the following to setup your `package.json`:

```
npm init -y
```

Install the following locally (a.k.a. with the `--save` flag)

```
npm install --save express
npm install --save express ejs react react-dom
npm install --save webpack babel-core babel-loader babel-preset-es2015 babel-preset-react
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
