import { Component, OnInit } from '@angular/core';
import { Iproperty } from '../Model/iproperty';
import { CatService } from '../services/cat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mruczarnia-list',
  templateUrl: './mruczarnia-list.component.html',
  styleUrls: ['./mruczarnia-list.component.css']
})
export class MruczarniaListComponent implements OnInit {
  CzyAdoptowany = 0;

  // Properties: Array<any> = [
  //   {
  //     Id: 0,
  //     Nazwa: 'Fisiek',
  //     Typ: 'Samiec',
  //     Wiek: '5 lat',
  //     Stan: 'Dobry'
  //   },
  //   {
  //     Id: 1,
  //     Nazwa: 'Blancik',
  //     Typ: 'Samiec',
  //     Wiek: '1 rok',
  //     Stan: 'Zaginiony'
  //   },
  //   {
  //     Id: 2,
  //     Nazwa: 'Rudy',
  //     Typ: 'Undefined',
  //     Wiek: '1 rok',
  //     Stan: 'Dobry'
  //   },
  //   {
  //     Id: 3,
  //     Nazwa: 'Kot',
  //     Typ: 'Samica',
  //     Wiek: '4 lata',
  //     Stan: 'Dobry'
  //   }
  // ];
  constructor(private catservice: CatService, private http: HttpClient) { }
  Properties: any;
  ngOnInit(): void {

    this.catservice.getAllProperties().subscribe(
      data =>
      {
        this.Properties = data;
        console.log(data);
      },
      // tslint:disable-next-line: no-shadowed-variable
      error =>
      {
        console.log(error);
      }
    );
  }

}
