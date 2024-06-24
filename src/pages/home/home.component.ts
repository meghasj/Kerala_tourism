import { Component } from '@angular/core';
import { HomeCardData } from '../../models/homecard.interface';
import { HomeCardComponent } from '../../app/components/home-card/home-card.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeCardComponent,]
})
export class HomeComponent {
    cardData: HomeCardData[] = [
        {
            id:1,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Houseboats_at_Kerala_Backwaters.jpg/525px-Houseboats_at_Kerala_Backwaters.jpg',
          title: ' Most Exciting Things to Do in Kerala',
          description:
            'Kerala offers a thrilling mix of adventure and relaxation. Explore the serene backwaters on a houseboat, trek through the lush Western Ghats, spot wildlife in Periyar National Park, or learn to surf at Kovalam Beach. There are also yoga retreats, Ayurvedic treatments, and cultural experiences waiting to be discovered.'
        },
        {
            id:2,
          imageUrl: 'https://as1.ftcdn.net/v2/jpg/04/10/11/74/1000_F_410117417_CG97Syw58AXomtk04ha6aw0hjxEKGqeJ.jpg', // Replace with an image URL of Kerala Sadhya
          title: ' Best Cuisines in Kerala',
          description:
            `kerala's cuisine is a symphony of flavors, heavily influenced by spices like coconut, curry leaves, and chilies. Savor a traditional Sadhya feast, a vegetarian spread with over 20 dishes served on a banana leaf. Don\'t miss the flaky Kerala Parotta, aromatic curries like Meen Curry (fish curry), and sweet treats like Payasam.`
        },
        {
            id:3,
          imageUrl: 'https://cdn.pixabay.com/photo/2016/09/02/14/25/kerala-1639325_1280.jpg', // Replace with an image URL of Kathakali performance
          title: ' Traditions of Kerala',
          description:
            'Kerala boasts a rich heritage with ancient traditions still practiced today. Witness the vibrant Kathakali dance drama, a classical art form depicting stories from mythology. Visit a local temple complex to observe rituals and admire intricate architecture. Explore the unique martial art form of Kalaripayattu, believed to be one of the oldest surviving fighting styles in India.'
        },
        {
            id:4,
          imageUrl: 'https://www.keralatourism.org/images/artforms/large/theyyam20131111114949_1_1.jpg', // Replace with an image URL of Theyyam mask
          title: ' Artforms of Kerala',
          description:
            `Kerala's artistic expression is diverse and captivating. Be mesmerized by Theyyam, a ritualistic dance where performers wear elaborate costumes and masks representing deities. Appreciate the intricate craftsmanship of Kasavu sarees, woven with gold threads. Witness the vibrant colors of Ottanthullal, a satirical performance with social commentary.`
        },
        // ... add more cards for other interesting aspects of Kerala
      ];

}
