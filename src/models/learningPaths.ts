import { Course, css, fundamentos, javaScript, practicoSql } from './courses';

class LearningPaths {

  private name: string;
  private courses: Course[];

  constructor( name: string, courses: Course[] ) {
    this.name = name;
    this.courses = courses;
  }

}


const desarrolloWeb: LearningPaths = new LearningPaths( 'Desarrollo Web', [ javaScript, css ] );
const escuelaDatoss: LearningPaths = new LearningPaths( 'Base de Datos', [ practicoSql, fundamentos ] );

export {
  desarrolloWeb, escuelaDatoss, LearningPaths
};