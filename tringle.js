let shape = require("./shape");

const tringleArea = () => {
  shape.height = 5;
  shape.width = 5;
  let base = 5;
  console.log(`tringle Function Area =  ${(1 / 2) * base * shape.height}`);
  console.log(`Width : ${shape.width}`);
};

module.exports.tringle = tringleArea;
