import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ViewChild
} from "@angular/core";
import { IQuestion } from "../shared/models/question.interface";
import { Button } from "protractor";
import * as $ from "jquery";
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  @Input() question: IQuestion;
  @Output() notifyAnswer: EventEmitter<IQuestion> = new EventEmitter();
  @ViewChild("elementRef", { static: false }) elm;
  disableButtons: boolean;
  isRequiredAnswer: boolean;
  constructor() {
    this.disableButtons = false;
    this.isRequiredAnswer = true;
  }

  ngOnInit() {
    if (
      this.question == null ||
      this.question === undefined ||
      Object.keys(this.question).length === 0
    ) {
      throw new Error("No question found");
    }
  }

  answerClicked(event: any, question: IQuestion) {
    this.isRequiredAnswer = false;
    event.target.style.borderWidth = "10px";
    this.disableButtons = true;
    this.notifyAnswer.emit(question);
  }
}
