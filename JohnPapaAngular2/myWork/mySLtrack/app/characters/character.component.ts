import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { EntityService, ModalService, ToastService } from '../blocks/blocks';
import { Character, CharacterService} from '../characters/character.service';

@Component({
    selector: 'story-character',
    templateUrl: 'app/characters/character.component.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    directives: [ROUTER_DIRECTIVES]
})

export class CharacterComponent implements CanDeactivate, OnDestroy, OnInit {

    private _dbResetSubscription: Subscription;

    @Input() character: Character;
    editCharacter: Character = <Character>{};

    constructor(
        private _characterService: CharacterService,
        private _entityService: EntityService,
        private _modalService: ModalService,
        private _routeParams: RouteParams,
        private _router: Router,
        private _toastService: ToastService){}

    cancel(showToast=true) {
        this.editCharacter = this._entityService.clone(this.character);
        if (showToast) {
            this._toastService.activate(`Cancelled changes to ${this.character.name}`);
        }
    }

    delete() {
        let msg = ``
    }
}