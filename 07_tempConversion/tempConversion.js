const ftoc = function(ftemp) {
  let newCTemp = (ftemp - 32) * 5/9;
  return Math.round(newCTemp);
};

const ctof = function(ctemp) {
  let newFTemp = (ctemp * 9/5) + 32;
  return Math.round(newFTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
