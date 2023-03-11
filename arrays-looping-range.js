function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  }

  const result = [];
  for (let currentNum = start; currentNum <= end; currentNum += step) {
    result.push(currentNum);
  }

  return result;
}