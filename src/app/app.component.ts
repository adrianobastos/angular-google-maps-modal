import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Google Maps';

  coordinates: Coordinates;

  constructor(
    private modalService: NgbModal
  ) {
    this.coordinates = {} as Coordinates;
  }

  openGoogelMapsModal() {
    const modalRef = this.modalService.open(GoogleMapsComponent,
      {
        scrollable: true,
      });
    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      this.coordinates = result;
    }, (reason) => {
    });
  }
}