import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CamelCasePipe } from './camel-case.pipe';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleFormComponent } from './TestForm/simple-form/simple-form.component';
import { TestGrpFormComponent } from './TestForm/test-grp-form/test-grp-form.component';
//import { DynamicFormComponent } from './TestForm/dynamic-form/dynamic-form.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CamelCasePipe,
    SimpleFormComponent,
    TestGrpFormComponent
    //  DynamicFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
