import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionComponent } from "./question.component";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("QuestionComponent", () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should throw an error because no questions found", () => {
    expect(function() {
      fixture.detectChanges();
    }).toThrow(new Error("No question found"));
  });

  it("should render the question in the header", () => {
    component.question = {
      answer: "This is my answer",
      question: "This is my question"
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("h4").textContent).toContain(
      "This is my question"
    );
  });
  it("should render the answers", () => {
    component.question = {
      answer: "This is my answer",
      question: "This is my question",
      followUpQuestions: [
        { question: "", answer: "Q1" },
        { question: "", answer: "Q2" }
      ]
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll("button").length).toBe(2);
  });
  it("should received the clicked answer", () => {
    component.question = {
      answer: "This is my answer",
      question: "This is my question",
      followUpQuestions: [{ question: "", answer: "A1" }]
    };
    fixture.detectChanges();
    spyOn(component, "answerClicked");
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    expect(component.answerClicked).toHaveBeenCalled();
  });
  fit("should disable the button after click", () => {
    component.question = {
      answer: "This is my answer",
      question: "This is my question",
      followUpQuestions: [{ question: "", answer: "A1" }]
    };
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.detectChanges();

    expect(document.querySelectorAll("button[disabled]").length).toBe(1);
  });
});
