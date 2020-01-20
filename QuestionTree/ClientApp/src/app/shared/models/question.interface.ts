export interface IQuestion {
  followUpQuestions?: IQuestion[];
  question: string;
  answer: string;
}
