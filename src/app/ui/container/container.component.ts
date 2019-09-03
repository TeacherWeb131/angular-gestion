import { Component, OnInit } from "@angular/core";

@Component({
  selector: "b-container",
  template: `
    <div class="container pt-5">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
