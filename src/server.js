//ES6
import express from 'express';
// import * as es6 from './auth/es6.js';
// import {number, letter} from './auth/es6.js';
import es6, {number} from './auth/es6.js';
//ES5
// const express = require('express');
const es5 = require('./auth/es5.js');
const app = express();



app.listen(9000, () => {
console.log(es6('asies'), number);
console.log('Server Is Running in port 9000'+ es5.main);
});