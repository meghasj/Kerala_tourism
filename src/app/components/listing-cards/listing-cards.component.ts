import { Component, Input } from '@angular/core';
import { HomeCardData } from '../../../models/homecard.interface';

@Component({
  selector: 'app-listing-cards',
  standalone: true,
  imports: [],
  templateUrl: './listing-cards.component.html',
  styleUrl: './listing-cards.component.scss'
})
export class ListingCardsComponent {
  @Input() data: HomeCardData = {
    id:0,
    imageUrl:"",
    title:"",
    description:""
  }
}
