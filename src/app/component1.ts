import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";

@Component({
  selector: 'app-component-one',
  template: `<button mat-button>Click me!</button>`,
  styles: [``]
})
export class ComponentOne {

}

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ComponentOne],
  exports: [ComponentOne]
})
export class ComponentOneModule {

}
