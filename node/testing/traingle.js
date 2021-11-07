const shape = require('./shape.js');
shape.height = 10;
shape.width = 20;

exports.log = function(){
    return {
        height: shape.height,
        width: shape.width,
        area: shape.height * shape.height
    }
}