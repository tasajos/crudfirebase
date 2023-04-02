import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PservicesService } from 'src/app/Servicios/pservices.service';


@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private placesService: PservicesService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
  }

}
