import * as acorn from "acorn";
import acornJsx from "acorn-jsx";

export default class SyntaxAnalyzer {
  private codeString: string;
  private acornParser = acorn.Parser.extend(acornJsx());
  private ast: acorn.Node | null = null;

  constructor(codeString: string) {
    this.codeString = codeString;
  }

  public getCodeString(): string {
    return this.codeString;
  }

  public setCodeString(codeString: string): void {
    this.codeString = codeString;
  }

  public createAst(options: acorn.Options): void {
    this.ast = this.acornParser.parse(this.codeString, options);
  }

  public getAst(): acorn.Node | null {
    return this.ast;
  }

  private walkOverAst(
    node: acorn.Node | acorn.SourceLocation,
    callback: (node: acorn.Node) => void
  ): void {
    // @ts-ignore
    callback(node);

    for (const key in node) {
      if (node.hasOwnProperty(key)) {
        // @ts-ignore
        const child = node[key as keyof acorn.Node];

        if (child !== null && typeof child === "object") {
          if (Array.isArray(child)) {
            child.forEach((node) => {
              if (node && typeof node === "object") {
                this.walkOverAst(node, callback);
              }
            });
          } else {
            this.walkOverAst(child, callback);
          }
        }
      }
    }
  }

  public analyzeAst(callback: (node: acorn.Node) => void): void {
    if (this.ast === null) {
      throw new Error("AST is not created yet");
    }

    this.walkOverAst(this.ast, callback);
  }
}
