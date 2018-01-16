import {Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: 'star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input rating: number;
    starWidth: number;
    @Output() ratingsClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void {
        this.starWidth = this.rating * (86/5);
    }

    onClick(): void {
        this.ratingsClicked.emit(`The rating ${this.rating} was clicked`)
    }
}