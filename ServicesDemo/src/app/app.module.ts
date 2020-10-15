import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './ServicesDemo/ServiceComponent/ServiceComponent';
import { JsonService } from '../app/ServicesDemo/services/json-service';
import { SubjectComponent } from './Observable_Promises/Subject/SubjectComponent/SubjectComponent';
import { BehaviorSubject } from './Observable_Promises/BehaviorSubject/BehaviorSubjectComponent/BehaviorSubject';
import { ObservableToPromise } from './Observable_Promises/ObservableToPromise/ObservableToPromise';
import { OperatorComponent } from './Observable_Promises/OperatorsRxjs/Operators';
import { PromiseComponent } from './Observable_Promises/Promise/Promise';
import { PipeDirectiveComponent } from './PipesDirectives/PipeDirective/PipeDirective';
import { PhoneFormatPipe } from './PipesDirectives/CustomPipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HighlightDirective } from './PipesDirectives/CustomDirective';
import { NgDoCheckComponent } from './LifeCycleHook/Parent/Child/ngDoCheck';
import { ParentComponent } from './LifeCycleHook/Parent/Parent';
import { SecondComponent } from './Routing/SecondComponent/secondComponent';
import { FirstComponent } from './Routing/firstComponent/firstComponent';
import { templateFormComponent } from './Forms/TemplateDrivenForms/templateForm';
import { ReactiveFormComponent } from './Forms/ReacitveForms/reactiveForm';
import { ReactiveFormTestComponent } from './TestCases/ReacitveForms/reactiveFormTest';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    SubjectComponent,
    BehaviorSubject,
    ObservableToPromise,
    OperatorComponent,
    PromiseComponent,
    PipeDirectiveComponent,
    PhoneFormatPipe,
    HighlightDirective,
    NgDoCheckComponent,
    ParentComponent,
    FirstComponent,
    SecondComponent,
    templateFormComponent,
    ReactiveFormComponent,
    ReactiveFormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JsonService, PhoneFormatPipe, HighlightDirective],   /* To use the service at app level, we give it in the providers array*/
  bootstrap: [AppComponent]
})
export class AppModule { }
