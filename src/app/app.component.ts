import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListingpageComponent } from "../pages/listingpage/listingpage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, NavbarComponent, ListingpageComponent]
})
export class AppComponent {
  title = 'keralaTourism';
}
