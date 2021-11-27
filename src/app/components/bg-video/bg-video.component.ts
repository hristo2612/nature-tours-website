import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss']
})
export class BgVideoComponent implements OnInit {

  @Input()
  set sources(value: string[]) {
    this._sources = value.map(source => {
      return {
        src: source,
        type: 'video/' + source.split('.').pop()
      }
    });
  }
  get sources(): any[] {
    return this._sources;
  }

  private _sources: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
