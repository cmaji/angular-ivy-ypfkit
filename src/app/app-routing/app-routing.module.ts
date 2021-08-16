import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from '../hello.component';
import { SimpleFormComponent } from '../TestForm/simple-form/simple-form.component';
import { TestGrpFormComponent } from '../TestForm/test-grp-form/test-grp-form.component';
import { DynamicFormComponent } from '../TestForm/dynamic-form/dynamic-form.component';
import { FormWithValidationComponent } from '../TestForm/form-with-validation/form-with-validation.component';

const routes: Routes = [
  { path: 'hellotest', component: HelloComponent },
  { path: 'simpleform', component: SimpleFormComponent },
  { path: 'grpform', component: TestGrpFormComponent },
  { path: 'dynform', component: DynamicFormComponent },
  { path: 'frmvalidate', component: FormWithValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
