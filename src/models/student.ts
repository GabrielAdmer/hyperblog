import { LearningPaths } from './learningPaths';

export class Student {

  private name: string;
  private email: string;
  private username: string;
  private twitter: string;
  private instagram: string;
  private approvedCourse: string[] = [];
  private leraningPaths: LearningPaths[] = [];


  constructor(
    name: string, email: string, username: string,
    twitter?: string, instagram?: string, leraningPaths?: LearningPaths[]
  ) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.twitter = twitter || '';
    this.instagram = instagram || '';
    this.leraningPaths = leraningPaths || [];
  }
}

