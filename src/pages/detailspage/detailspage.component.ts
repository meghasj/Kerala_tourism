import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { District } from '../../models/districts.interface';

@Component({
  selector: 'app-detailspage',
  standalone: true,
  imports: [],
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.scss'
})
export class DetailspageComponent implements OnInit {
  itemId: number | null = null;
  district: District | null = null;
  errorMessage: string | null = null;
i: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.itemId = id ? +id : null; // Convert id to number or set to null
      if (this.itemId) {
        this.fetchDetails(this.itemId);
      }
    });
  }

  async fetchDetails(id: number) {
    try {
        const response = await fetch(' https://eba67a66f60040e0b42f8e796cc1fffa.api.mockbin.io/');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);

        // Find the district with the matching ID
        const filteredDistrict = data.districts.find((district: { id: number }) => district.id === id);
        console.log(filteredDistrict);

        // Return the filtered district data or handle the case where no match is found
        
            this.district = filteredDistrict;
        
    } catch (error) {
        console.error('Error fetching data:', error);
       
    }
}

  


}