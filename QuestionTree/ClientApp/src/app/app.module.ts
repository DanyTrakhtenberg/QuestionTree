import { QuestionComponent } from './question/question.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DecisionTreeComponent } from "./decision-tree/decision-tree.component";
import { DataStoreService } from "./core/services/data-store.service";
import { MockedDataStore } from "./shared/data-store-mocsk";
import { HttpClientModule } from '@Angular/common/http';

@NgModule({
  declarations: [AppComponent, DecisionTreeComponent, QuestionComponent],
  imports: [BrowserModule, HttpClientModule],
 // providers: [{ provide: DataStoreService, useClass: MockedDataStore }],
  bootstrap: [AppComponent]
})
export class AppModule {}
