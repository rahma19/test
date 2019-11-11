import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.css"]
})
export class FilmListComponent implements OnInit {
  films = [
    { titre: "ange&demons", affiche: "../assets/ange.jpg", duree: 120 },
    { titre: "coco", affiche: "../assets/coco.jpg", duree: 88 },
    { titre: "coeur nomade", affiche: "../assets/nomade.bmp", duree: 97 }
  ];
  datejour = new Date();
  nb = 0;
  nombre(n: Number) {
    for (let i = 0; i < this.films.length; i++)
      if (n > this.films[i].duree) this.nb++;
    return this.nb;
  }
  x = "";
  txt(ch: string) {
    this.x = ch;
  }
  constructor() {}

  ngOnInit() {}
}
