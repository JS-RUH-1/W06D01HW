const shape = require('./shape.js');
shape.width = 40;

exports.log = function(){
    return {
        height: shape.height,
        width: shape.width,
        area: shape.height * shape.height
    }
}