import { IQuestion } from "src/app/shared/models/question.interface";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-decision-tree",
  templateUrl: "./decision-tree.component.html",
  styleUrls: ["./decision-tree.component.css"]
})
export class DecisionTreeComponent implements OnInit {
  @Input() questions: IQuestion;
  questionTree: IQuestion[];
  constructor() {
    this.questionTree = [];
  }

  ngOnInit() {
    if (
      this.questions == null ||
      this.questions === undefined ||
      Object.keys(this.questions).length === 0
    ) {
      throw new Error("No questions found");
    }
    this.questionTree = [];
    this.questionTree[0] = this.questions;
  }

  getAnswer(answer: IQuestion) {
    this.questionTree.push(answer);

    this.questionTree = Object.assign([], this.questionTree);
  }
}
