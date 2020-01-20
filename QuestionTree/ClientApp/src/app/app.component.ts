import { Component, OnInit } from "@angular/core";
import { DataStoreService } from "./core/services/data-store.service";
import { IQuestion } from "./shared/models/question.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  questions: IQuestion;
  constructor(private dataStore: DataStoreService) {}

  ngOnInit(): void {
    this.dataStore.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }
}
