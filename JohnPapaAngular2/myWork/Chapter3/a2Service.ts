import {Injectable} from "angular/core";

@Injectable()
export class VehicleService {
    getVehicles = () => [
        {id: 1, name: 'X Wing Fighter'},
        {id: 2, name: 'TIE Fighter'},
        {id: 3, name: 'Y Wing Fighter'}
    ];
}


import { VehicleService } from '/vehicle.service';

@Component ({
    selector: 'my-vehicles',
    templateUrl: 'app/vehicles.component.html',
    providers: [VehicleService]
})

export class VehicleComponent{
    constructor(
        private _vehicleService: VehicleService) {}
    vehicles = this._vehicleService.getVehicles();
}

