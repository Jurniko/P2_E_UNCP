import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MLevelComponent } from './m-level/m-level.component';
import { MButtonComponent } from './m-button/m-button.component';
import { MFInputComponent } from './form/m-f-input/m-f-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MFRadioComponent } from './form/m-f-radio/m-f-radio.component';
import { MFSearchComponent } from './form/m-f-search/m-f-search.component';
import { MHComponent } from './m-h/m-h.component';
import { QuestionsLvlComponent } from './questions-lvl/questions-lvl.component';
import { MNavbarLvlComponent } from './m-navbar-lvl/m-navbar-lvl.component';
import { MFSelectComponent } from './form/m-f-select/m-f-select.component';
import { MFTextareaComponent } from './form/m-f-textarea/m-f-textarea.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';



@NgModule({
  declarations: [MLevelComponent, MButtonComponent,MFInputComponent, MFRadioComponent, MFSearchComponent, MHComponent, QuestionsLvlComponent, MNavbarLvlComponent, MFSelectComponent, MFTextareaComponent, NotFoundErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[MLevelComponent, MButtonComponent,MFInputComponent,MFRadioComponent,MFSearchComponent,MHComponent,QuestionsLvlComponent,MNavbarLvlComponent,MFSelectComponent,MFTextareaComponent]
})
export class SharedModule { }
