#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');

console.log('copy template')
fs.copySync(path.resolve(__dirname, '../src'), '../../../src',{overwrite:false});
fs.copySync(path.resolve(__dirname, '../dist'), '../../../dist',{overwrite:false});
fs.copyFileSync(path.resolve(__dirname, "../webpack.config.js"), '../../../webpack.config.js');

process.on('exit',()=>{
  console.log(
  `
-----------------------------
  JWF Build Command
  ---------------
  build: npx webpack
  start: npx webpack-dev-server
-----------------------------

  `)
})