import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MLevelComponent } from './m-level/m-level.component';
import { MButtonComponent } from './m-button/m-button.component';
import { MFInputComponent } from './form/m-f-input/m-f-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MLevelComponent, MButtonComponent,MFInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[MLevelComponent, MButtonComponent,MFInputComponent]
})
export class SharedModule { }
