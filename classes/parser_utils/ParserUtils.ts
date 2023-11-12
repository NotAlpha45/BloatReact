import { JsSyntaxEnum, JsxSyntaxEnum } from "../../enums/SyntaxEnum";
import * as acorn from "acorn";

export default class ParserUtils {
  static printNodes(node: acorn.Node, nodeType: JsSyntaxEnum | JsxSyntaxEnum) {
    if (node.type === nodeType) {
      console.log("---------------------");
      console.log(node);
      console.log("---------------------");
    }
  }
}
