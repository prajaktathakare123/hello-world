import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demov9";

  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  defaultseason: any;

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    console.log("d", this.defaultseason);
    this.items = firestore.collection("test1").valueChanges();
  }
  radiochange(season) {
    console.log(season);
  }
}
