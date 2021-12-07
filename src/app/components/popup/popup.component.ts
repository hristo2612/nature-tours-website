import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Output() closePopup = new EventEmitter<boolean>();

  hidePopup = false;

  constructor() { }

  onClose() {
    this.hidePopup = true;
    setTimeout(() => {
      this.closePopup.emit(true);
    }, 420);
  }

  ngOnInit(): void {
  }

}
