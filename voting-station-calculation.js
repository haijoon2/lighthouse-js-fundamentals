// Question:
// Welcome to Codeville, a small but thriving town in Serverside, Canada.
// The town election is coming up, and citizens are excited to get to voting!
// The dutiful City of Codeville staff has finalized most of the details, except for one thing:
// where will citizens vote?

// There are hundreds of buildings in town, but there are very specific requirements for
// what constitutes an acceptable voting station. With very little time to decide,
// the city needs our help to sort through the building data.
// We'll write a chooseStations(stations) function that takes in an array of possible
// voting stations, and then only returns the names of the stations that are appropriate.

// Your function will receive an array of stations, where each station itself is an array with
// a name, a capacity, and a venue type.
// In order for a station to be deemed appropriate, it must have a capacity of at least 20,
// and be a school or community centre.

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  const result = [];

  for (let i = 0; i < stations.length; i++) {
    const currentStation = stations[i];
    if (
      currentStation[1] >= 20 &&
      (currentStation[2] === "school" ||
        currentStation[2] === "community centre")
    ) {
      result.push(currentStation[0]);
    }
  }
  return result;
};

chooseStations(stations);