import { Component, Input } from '@angular/core';
import { HomeCardData } from '../../../models/homecard.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  @Input() cardData: HomeCardData = {
    id:0,
    imageUrl:"",
    title:"",
    description:""
  }


}
