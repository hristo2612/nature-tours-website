import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {

  features: any[] = [
    {
      title: 'Explore the World',
      description: 'Do you like to travel? Explore the world and find the best places to visit.',
      iconClass: 'icon-basic-world'
    },
    {
      title: 'Meet Nature',
      description: 'Meet nature and share your experience with other people.',
      iconClass: 'icon-basic-compass'
    },
    {
      title: 'Find Your Way',
      description: 'Find your way around the world with our map.',
      iconClass: 'icon-basic-map'
    },
    {
      title: 'Live A Healthier Life',
      description: 'Live a healthier life with our tips and advice.',
      iconClass: 'icon-basic-heart'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
