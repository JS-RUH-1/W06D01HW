let shapT=require('./shape')
exports.tringle=function(){
    shapT.width =2
    shapT.height=4
    let area =(shapT.width*shapT.height) /2
    return(
        area
    );
}