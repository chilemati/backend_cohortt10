const user = require("./module");
const os = require("os");
const fs = require("fs");

// module
console.log(user);
//os
console.log(os.platform());
console.log(os.version());
console.log(os.machine());

//fs
//write a file
// fs.writeFileSync("./nodeWrite.txt", "Hello Worlde", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File written");
// });
//read from a file
fs.readFile("./nodeWrite.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  //   console.log(data.toString());
});
//create folder
// fs.mkdir("model", (err) => {
//   console.log("folder was created!");
// });
fs.rmdir("model", (err) => {
  console.log("folder was deleted!");
});
//delete folder
