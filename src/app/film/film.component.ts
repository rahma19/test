import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  @Input() img: string;
  @Input() dure: Number;
  @Input() titre: string;
  prix = 6;

  constructor() {}

  ngOnInit() {}
}
