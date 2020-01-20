import { IQuestion } from "./../shared/models/question.interface";
import { QuestionComponent } from "./../question/question.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DecisionTreeComponent } from "./decision-tree.component";

describe("DecisionTreeComponent", () => {
  let component: DecisionTreeComponent;
  let fixture: ComponentFixture<DecisionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecisionTreeComponent, QuestionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionTreeComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("should throw an error because no questions found", () => {
    expect( function(){ fixture.detectChanges(); } ).toThrow(new Error("No questions found"));
  });

  it("should throw an error because no questions found - null", () => {
    component.questions = null;
    expect( function(){ fixture.detectChanges(); } ).toThrow(new Error("No questions found"));
  });

  it("should populate the first floor with one question", () => {
    component.questions = {
      answer: "This is my answer",
      question: "It is a Yes or a No?",
      followUpQuestions: [
        { answer: "Yes", question: "" },
        { answer: "No", question: "" }
      ]
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll("app-question").length).toBe(
      1
    );
  });

  it("should populate the second floor with one question after click", () => {
    component.questions = {
      question: "Do i want a doughnut?",
      answer: "",
      followUpQuestions: [
        {
          answer: "No",
          question: "Maybe you want an apple?",
          followUpQuestions: []
        }
      ]
    };
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.detectChanges();
    const h4Elm = Array.from(document.querySelectorAll("h4")).find(
      el => el.innerText === "Maybe you want an apple?"
    );
    expect(h4Elm).toBeTruthy();
  });
});
