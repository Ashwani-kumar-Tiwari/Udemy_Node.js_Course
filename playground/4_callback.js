setTimeout(() => {
  console.log("two sec up");
}, 2000);

const names = ["Ashwani", "abcd", "abcde"];

const shortNames = names.filter((names) => {
  return names.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);
};

geocode("Delhi", (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
