const fs = require("fs");

// const book = {
//   title: "Keep Learning",
//   author: "Ashwani Kumar Tiwari",
// };

// const bookjson = JSON.stringify(book);
// console.log(bookjson);

// const parsedData = JSON.parse(bookjson)
// console.log(parsedData.author);

// fs.writeFileSync("1_json.json", bookjson);

// const databuffer = fs.readFileSync("1_json.json"); // it will read data in binary
// // console.log(databuffer);
// const dataJson = databuffer.toString(); // convert to a standard javascript string
// const data = JSON.parse(dataJson); // pasre in a object
// console.log(data.title);

/////////overwriting the json file
databuffer = fs.readFileSync("1_json.json");
const dataJson = databuffer.toString();
const user = JSON.parse(dataJson);
user.name = "Ashwani";
user.age = "24";

const userjson = JSON.stringify(user);
fs.writeFileSync("1_json.json", userjson);
