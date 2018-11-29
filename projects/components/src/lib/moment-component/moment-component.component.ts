import moment from "moment";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'lib-moment-component',
  template: `
    <p>
      Moment component!
    </p>
  `,
  styles: []
})
export class MomentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(moment());
  }


}
