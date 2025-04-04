/* 
1. inquirer npm package to get user input.
2. qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// URL validation function
function isValidURL(str) {
  try {
    new URL(str); // Built-in URL class in Node.js
    return true;
  } catch (e) {
    return "Please enter a valid URL (e.g. https://example.com)";
  }
}

// inquirer for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "website",
      message: "Enter the URL:",
      validate: isValidURL,
    },
  ])
  .then((answers) => {
    console.log("URL received:", answers.website);

    // QR image generator
    var qr_img = qr.image(answers.website);
    qr_img.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", answers.website, (e) => {
      if (e) console.log(e);
      console.log("QR is generated and file is saved!");
    });
  });
