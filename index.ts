import * as fs from "fs";
import SyntaxAnalyzer from "./classes/syntax_analyzer/SyntaxAnalyzer";
import * as acorn from "acorn";
import ParserUtils from "./classes/parser_utils/ParserUtils";
import { JsSyntaxEnum, JsxSyntaxEnum } from "./enums/SyntaxEnum";

const file_string = fs.readFileSync("./demo_codes/test.jsx", "utf8");
const analyzer = new SyntaxAnalyzer(file_string);

//ts-ignore
analyzer.createAst({
  ecmaVersion: "latest",
  sourceType: "module",
  locations: true,
  ranges: true,
});

const ast = analyzer.getAst();

analyzer.analyzeAst((node: acorn.Node) => {
  ParserUtils.printNodes(node, JsxSyntaxEnum.JSXFragment);
});

// console.log(ast);
