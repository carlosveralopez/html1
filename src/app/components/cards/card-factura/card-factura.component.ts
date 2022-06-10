import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-factura",
  templateUrl: "./card-factura.component.html",
})
export class CardfacturaComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() {}

  ngOnInit(): void {}
}
