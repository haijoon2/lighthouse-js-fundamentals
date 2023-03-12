const carPassing = function (cars, speed) {
  const car = {
    time: Date.now(),
    speed // speed: speed is same as speed,
  };

  cars.push(car);
  return cars;
};

// Altenative Answer
const carPassing2 = function (cars, speed) {
  cars.push({
    time: Date.now(),
    speed // speed: speed is same as speed,
  });
  return cars;
};