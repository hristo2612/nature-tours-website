import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-section',
  templateUrl: './tours-section.component.html',
  styleUrls: ['./tours-section.component.scss']
})
export class ToursSectionComponent implements OnInit {

  tours: any[] = [
    {},
    {},
    {}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
