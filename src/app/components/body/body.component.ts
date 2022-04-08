import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
})
export class BodyComponent implements OnInit {
  public talpa?: number;
  public greitis?: number;
  public laikas?: number;
  public uzpildyta: number = 0;
  public info: string = "";

  constructor() {}

  ngOnInit(): void {}

  public skaiciuoti() {
    if (this.talpa != null && this.greitis != null && this.laikas != null) {
      this.uzpildyta = Math.round(
        ((this.greitis * this.laikas) / this.talpa) * 100
      );
      if (this.uzpildyta < 80) this.info = "Rezervuaro talpa stabili";
      if (this.uzpildyta >= 80 && this.uzpildyta < 100)
        this.info = "Rezervuaro talpa kritiškai pripildyta";
      if (this.uzpildyta >= 100) this.info = "Talpa yra perpildyta";
    }
  }
}
