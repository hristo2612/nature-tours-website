import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-showcase',
  templateUrl: './image-showcase.component.html',
  styleUrls: ['./image-showcase.component.scss']
})
export class ImageShowcaseComponent implements OnInit {

  images: string[] = [
    '/assets/img/nat-1-large.jpg',
    '/assets/img/nat-2-large.jpg',
    '/assets/img/nat-3-large.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
