import { Injectable, inject } from "@angular/core";
import { IQuestion } from "src/app/shared/models/question.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@Angular/common/http";
import { isNgContent } from '@angular/compiler';

import { basename } from 'path';

@Injectable({
  providedIn: "root"
})
export class DataStoreService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion> {
    let baseUrl = document.getElementsByTagName('base')[0].href;
    return this.http.get<IQuestion>(baseUrl + 'api/QuestionTree'); 
  } 
}
