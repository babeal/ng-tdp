import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { MatRadioModule } from "@angular/material";

@Component({
  selector: 'app-component-two',
  template: `
  <mat-radio-group aria-label="Select an option">
    <mat-radio-button value="1">Option 1</mat-radio-button>
    <mat-radio-button value="2">Option 2</mat-radio-button>
  </mat-radio-group>
  `,
  styles: [``]
})
export class ComponentTwo {

}

@NgModule({
  imports: [CommonModule, MatRadioModule],
  declarations: [ComponentTwo],
  exports: [ComponentTwo]
})
export class ComponentTwoModule {

}
