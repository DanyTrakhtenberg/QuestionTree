import { IQuestion } from "./models/question.interface";
import { Observable, of } from "rxjs";

export class MockedDataStore {
  questions: IQuestion =
    {
      question: "Do i want a doughnut?",
      answer: "",
      followUpQuestions: [
        {
          answer: "No",
          question: "Maybe you want an apple?",
          followUpQuestions: []
        },
        {
          answer: "YES",
          question: "Do i deserve it?",
          followUpQuestions: [
            {
              question: "Are you sure?",
              answer: "yes",
              followUpQuestions: [
                {
                  question: "Get it",
                  answer: "Yes"
                }
              ]
            },
            {
              question: "Is it a good doughnut?",
              answer: "No",
              followUpQuestions: [
                {
                  answer: "yes",
                  question: "What are you waiting for? Grab it now"
                },
                {
                  answer: "No",
                  question: "Wait til you find a sinful unforgettable"
                }
              ]
            }
          ]
        }
      ]
    };

  getQuestions(): Observable<IQuestion> {
    return of(this.questions);
  }
}
