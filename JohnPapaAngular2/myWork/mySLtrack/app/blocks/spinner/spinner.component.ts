import {Component, OnDestroy, OnInit} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';

import {ISpinnerState, SpinnerService} from './spinner.service';

const ACTIVE_CLASS = 'is-active';

export class SpinnerComponent implements OnDestroy, OnInit {
    visible = false

    private _spinnerStateChanged: Subscription;

    constructor(private _spinnerService: SpinnerService) {}

    ngOnInit() {
        componentHandler.upgradeDom();
        this._spinnerStateChanged = this._spinnerService.spinnerState
            .subscribe((state: ISpinnerState) => this.visible = state.show);
    }
    ngOnDestroy() {
        this._spinnerStateChanged.unsubscribe();
    }
}