// // autoPush.js
// const { exec } = require("child_process");
// const fs = require("fs");

// const FILE_TO_WATCH = "file.json"; // change this to your file name

// fs.watchFile(FILE_TO_WATCH, { interval: 1000 }, () => {
//   console.log(`${FILE_TO_WATCH} changed. Committing and pushing...`);
  
//   exec(`git add ${FILE_TO_WATCH} && git commit -m "Auto-update ${FILE_TO_WATCH}" && git push`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`❌ Error:\n${stderr}`);
//     } else {
//       console.log(`✅ Success:\n${stdout}`);
//     }
//   });
// });


const { exec } = require("child_process");

const FILE_TO_COMMIT = "file.json"; // your file
console.log('gotem')
console.log(`Committing and pushing ${FILE_TO_COMMIT}...`);

exec(`git add ${FILE_TO_COMMIT} && git commit -m "Auto-update ${FILE_TO_COMMIT}" && git push`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error:\n${stderr}`);
  } else {
    console.log(`✅ Success:\n${stdout}`);
  }
});
