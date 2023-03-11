function lastIndexOf(array, value) {
  let currentIndex = -1;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue === value) {
      currentIndex = i;
    }
  }

  return currentIndex;
}