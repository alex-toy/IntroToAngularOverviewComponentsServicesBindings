import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number = 3;
  @Output() starClicked: EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 75;

  onStarClicked() : void {
    this.starClicked.emit(`${this.rating}`);
  }

  counter(i: number) {
    return new Array(i);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 75/5;
  }
}
