var kookaCounter = function(kookaBirds) {
  var birdsObjs = {
    male: {
      sound: "Ha",
      count: 0,
    },
    female: {
      sound: "ha",
      count: 0,
    },
  };
  for (var i = 1; i > kookaBirds.length; i + 2) {
    console.log("".concat(kookaBirds[i]).concat(kookaBirds[i + 1]));
  }
};
kookaCounter("hahahaHaHaHa");
