import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '_shared/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SharedSpinnerModule { }
