import * as fs from "fs";

// Read the command line arguments
// const args = process.argv.slice(1);
// console.log(args);

const file = fs.readFileSync("./demo_codes/test.jsx", "utf8");
