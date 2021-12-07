import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-section',
  templateUrl: './tours-section.component.html',
  styleUrls: ['./tours-section.component.scss']
})
export class ToursSectionComponent implements OnInit {

  popupVisible: boolean = false;

  tours: any[] = [
    {
      title: 'The Sea Explorer',
      price: 299,
      list: [
        '3 day tour',
        'Up to 30 people',
        '2 tour guides',
        'Sleep in cozy hotels',
        'Difficulty: Easy'
      ]
    },
    {
      title: 'The Forest Hiker',
      price: 499,
      list: [
        '7 day tour',
        'Up to 40 people',
        '6 tour guides',
        'Sleep in provided tents',
        'Difficulty: Medium'
      ]
    },
    {
      title: 'The Snow Adventurer',
      price: 999,
      list: [
        '5 day tour',
        'Up to 15 people',
        '3 tour guides',
        'Sleep in provided tents',
        'Difficulty: Hard'
      ]
    }
  ]

  constructor() { }

  onClosePopup(close: boolean) {
    this.popupVisible = !close;
  }

  ngOnInit(): void {
  }

}
