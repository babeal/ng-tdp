import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'lib-simple-component',
  template: `
    <p>
      Simple component!
    </p>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
