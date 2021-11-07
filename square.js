let shap = require("./shape");

const squareArea = () => {
  shap.width = 20;
  console.log(`Square Function  Area= ${shap.width * shap.height}`);
  console.log(`Width : ${shap.width}`);
};
module.exports.square = squareArea;
