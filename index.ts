import * as fs from "fs";
import SyntaxAnalyzer from "./classes/SyntaxAnalyzer";
import * as acorn from "acorn";

const file_string = fs.readFileSync("./demo_codes/test.jsx", "utf8");
const analyzer = new SyntaxAnalyzer(file_string);

analyzer.createAst({
  ecmaVersion: "latest",
  sourceType: "module",
  locations: true,
  ranges: true,
});

const ast = analyzer.getAst();

const walk = (node: acorn.Node) => {
  if (node.type === "VariableDeclaration") {
    console.log(node);
    console.log("------------------");
  }
};

analyzer.analyzeAst(walk);

// console.log(ast);
