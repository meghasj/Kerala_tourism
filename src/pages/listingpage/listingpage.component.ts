import { Component } from '@angular/core';
import { ListingCardsComponent } from "../../app/components/listing-cards/listing-cards.component";
import { HomeCardData } from '../../models/homecard.interface';
import { Router } from '@angular/router';
import { FilterPipe } from "../../app/pipe/filter.pipe";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-listingpage',
    standalone: true,
    templateUrl: './listingpage.component.html',
    styleUrl: './listingpage.component.scss',
    imports: [ListingCardsComponent, FilterPipe,FormsModule]
})
export class ListingpageComponent {

  toFilter: string='';
    data: HomeCardData[] = [
            {
              id: 1,
              title: 'TVM',
              description: 'Capital city',
              imageUrl: 'https://victorianweb.org/history/empire/india/trivandrum/4.jpg'
            },
            {
              id: 2, 
              title: 'Kollam', 
              description: 'Known for its beaches and backwaters',
              imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/f4/af/worlds-largest-bird-sculpture.jpg?w=500&h=500&s=1'
            },
            {
              id: 3,
              title: 'Pathanamthitta',
              description: 'Famous for pilgrim centers and natural beauty',
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gavi%2C_Kerala.jpg/200px-Gavi%2C_Kerala.jpg'
            },
            {
              id: 4,
              title: 'Alappuzha',
              description: 'Famous for houseboats and backwaters',
             imageUrl:'https://media.istockphoto.com/id/1435366683/photo/kerala-backwaters-houseboat-trip.webp?s=1024x1024&w=is&k=20&c=mib0I5eanYHw9IMlxCsaVTbjtpRN3mIu0QuajL9icJg='
            },
            {
              id: 6,
              title: 'Idukki',
              description: 'Known for its hill stations and wildlife sanctuaries',
              imageUrl:"https://media.istockphoto.com/id/2156923404/photo/landscape-view-from-eravikulam-national-park-situated-in-the-kannan-devan-hills-near-munnar.jpg?s=1024x1024&w=is&k=20&c=cV8y-BDjMVKghChvFur6SCTy8-H1YLIh66ZazH-eing="
            
            },
            {
              id: 7,
              title: 'Ernakulam',
              description: 'Economic hub and the largest urban agglomeration',
              imageUrl:'https://cdn.pixabay.com/photo/2016/11/26/01/15/ernakulam-1859831_1280.jpg'
              
            },
            {
              id: 8,
              title: 'Thrissur',
              description: 'Cultural capital and known for Thrissur Pooram',
              imageUrl:'https://media.istockphoto.com/id/469187950/photo/elephant-festival-at-a-small-temple-in-varkala-kerala.jpg?s=1024x1024&w=is&k=20&c=eGKg9wE_Qww2ICFhrbhnGUGW1CjmUU7bmefl10KmkIc='
              
            },
            {
              id: 9,
              title: 'Palakkad',
              description: 'Known for its Palakkad Fort and paddy fields',
              imageUrl: 'https://cdn.pixabay.com/photo/2022/03/15/08/55/palakkad-fort-7069807_1280.jpg'
            },
            {
              id: 10,
              title: 'Malappuram',
              description: 'Known for its rich cultural heritage',
              imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/75/4f/07/photo1jpg.jpg?w=2200&h=-1&s=1'
            },
            {
              id: 11,
              title: 'Kozhikode',
              description: 'Famous for its historical significance and cuisine',
              imageUrl: 'https://www.keralatourism.org/images/picture/large/Payyoli_Beach_Kozhikode_81.jpg'
            },
            {
              id: 12,
              title: 'Wayanad',
              description: 'Known for its wildlife and hill stations',
              imageUrl: 'https://cdn.pixabay.com/photo/2021/10/15/10/08/forest-6711623_1280.jpg'
            },
            {
              id: 13,
              title: 'Kannur',
              description: 'Famous for its forts and theyyam festivals',
              imageUrl: 'https://www.trawell.in/admin/images/upload/682559714Kannur_Lighthouse.jpg'
            },
            {
              id: 14,
              title: 'Kasaragod',
              description: 'Known for its coir and handloom industries',
              imageUrl: 'https://www.keralabackwater.com/pictures/package/guide_image/kerala-offbeat-tour-91.jpeg'
            }
          ];

          constructor(private router: Router) {} // Inject Router service

  onCardClick(selectedCard: HomeCardData) {
    this.router.navigate(['/details', selectedCard.id]); // Navigate with ID as URL parameter
  }
}
