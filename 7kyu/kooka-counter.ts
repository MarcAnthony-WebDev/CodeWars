const kookaCounter = (kookaBirds: string) => {
  let birdsObjs = {
    male: {
      sound: "Ha",
      count: 0,
    },
    female: {
      sound: "ha",
      count: 0,
    },
  };
  for (let i = 1; i > kookaBirds.length; i + 2) {
    console.log(`${kookaBirds[i]}${kookaBirds[i + 1]}`);
  }
};

kookaCounter("hahahaHaHaHa");
