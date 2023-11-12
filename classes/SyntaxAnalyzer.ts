import * as acorn from "acorn";
import acornJsx from "acorn-jsx";

export class SyntaxAnalyzer {
  private codeString: string;
  private acornParser = acorn.Parser.extend(acornJsx());
  private ast: acorn.Program | null = null;

  constructor(codeString: string) {
    this.codeString = codeString;
  }

  public getCodeString(): string {
    return this.codeString;
  }

  public setCodeString(codeString: string): void {
    this.codeString = codeString;
  }

  public analyze(options: acorn.Options): void {
    this.ast = this.acornParser.parse(this.codeString, options);
  }

  public getAst(): acorn.Program | null {
    return this.ast;
  }
}
