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
npm install --save react-router 
npm install --save isomorphic-fetch
```

Install the following globally (a.k.a. with the `--global` flag) for compiling files from the command line & for setting up React client-side JavaScript packing:

```
npm install --global babel-cli
npm install --global webpack
```

Make a `.babelrc` configuration file with the following content:

```
{
  "presets": ["es2015"]
}
```

In order for React to run on the front-end, we need to pack the `browser.js` file & output a JavaScript file to the `public` folder, in order for the browser to utilize the React written.  Make a `webpack.config.js` file at the root of the project, and fill it with the following:

```
module.exports = {
  entry: [
    './browser.js'
  ],
  output: {
    path: './public',
    filename: "bundle.js"
  }, module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};
```

Run the following to generate the client-side bundled JavaScript file:

```
webpack –p
```

Finally, as a modification to our `package.json` file, we add the following line to our `"script"` sub-JSON:

```
"start": "DEBUG=express:* babel-node server.js"
```

This line allows us to run the applicaton via `npm start`.

## Content

The content of this configuration can be seen by viewing the various JavaScript files of the project.  
