const judgeVegetable = function (vegetables, metric) {
  let submitter = "";
  let lastHighestValue = 0;
  vegetables.forEach((element) => {
    const currentValue = element[metric];
    if (currentValue > lastHighestValue) {
      lastHighestValue = currentValue;
      submitter = element.submitter;
    }
  });
  return submitter;
};
