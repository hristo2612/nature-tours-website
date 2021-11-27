import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-section',
  templateUrl: './stories-section.component.html',
  styleUrls: ['./stories-section.component.scss']
})
export class StoriesSectionComponent implements OnInit {

  stories: any[] = [
    {
      title: 'I had the best week ever with my family',
      description: `Everyone is super nice and welcoming. The adventure was fantastic and we had a lot of fun.
      I recommend this place to everyone. The service of the host was amazing. I will definitely be back!
      To anyone who wants to try this place out, please give it a shot! Not only is it amazing, but it's also a great place to stay!`,
      imageUrl: 'assets/img/nat-8.jpg',
      fullName: 'Jane Doe'
    },
    {
      title: 'WOW! My life is completely different now',
      description: `I can't say enough good things about this place. I am so happy and satisfied with the service.
      I will definitely be back! Good job! True hospitality and great food! Perfect place to stay! Host was very accommodating and helpful.
      The place we went to was fucking amazing! Nature was amazing! The host was amazing!`,
      imageUrl: 'assets/img/nat-9.jpg',
      fullName: 'John Doe'
    }
  ]

  backgroundVideoSources: string[] = [
    'assets/img/video.mp4',
    'assets/img/video.webm'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
