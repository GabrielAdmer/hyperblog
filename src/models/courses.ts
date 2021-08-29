
export class Course {
  private name: string;
  private clases: string[];

  constructor( name: string, clases?: string[] ) {
    this.clases = clases || [];
    this.name = name;
  }
}

const javaScript = new Course( 'javaScript' );
const css = new Course( 'css' );
const practicoSql = new Course( 'curso practico de sql' );
const fundamentos = new Course( 'fundamentos sql' );

export {
  javaScript,
  css,
  practicoSql,
  fundamentos
};