// import {Matrix} from './node_modules/ml-matrix';
// const {Matrix} = require('./node_modules/ml-matrix')
// import {Matrix} from './node_modules/ml-matrix'

// const canvas = document.querySelector("canvas")
// const ctx = canvas.getContext("2d");

// canvas.width = innerWidth
// canvas.height = innerHeight

// ctx.save()
// ctx.beginPath()

// const scale = (x, y) => {
//   ctx.scale(x, y)
// }

// const rotate = (deg) => {
//   ctx.rotate(deg)
// }

// const translate = (x, y) => {
//   ctx.translate(x, y)
// }
// const degToRad = (deg) => deg * Math.PI / 180;

// // rotate(degToRad(45))

// ctx.fillRect(200, 200, 100, 100)
// ctx.fill()
// ctx.restore()
// const getRotateMatrix = (deg, translateX = 0, translateY = 0) => new Matrix([
//   [Math.cos(degToRad(deg)), Math.sin(degToRad(deg)), 0],
//   [-Math.sin(degToRad(deg)), Math.cos(degToRad(deg)), 0],
//   [translateX, translateY, 1],
// ]);

// const getTransformationMatrix = ({
//   scaleX = 1,
//   scaleY = 1,
//   skewX = 0,
//   skewY = 0,
//   translateX = 0,
//   translateY = 0
// }) => new Matrix([
//   [scaleX, Math.sin(degToRad(skewX)), 0],
//   [-Math.sin(degToRad(skewY)), scaleY, 0],
//   [translateX, translateY, 1],
// ]);


// const getScaleMatrix = (factor, translateX = 0, translateY = 0) => new Matrix([
//   [factor, 0, 0],
//   [0, factor, 0],
//   [translateX, translateY, 1],
// ]);


// const getYSkewMatrix = (deg, translateX, translateY) => new Matrix([
//   [1, Math.sin(degToRad(deg)), 0],
//   [0, 1, 0],
//   [translateX, translateY, 1],
// ]);


// const getXSkewMatrix = (deg, translateX, translateY) => new Matrix([
//   [1, 0, 0],
//   [-Math.sin(degToRad(deg)), 1, 0],
//   [translateX, translateY, 1],
// ]);

