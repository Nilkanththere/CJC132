import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  Marketcap: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Tata Consultancy Services Limited', Marketcap: 1280574.59},
  {position: 2, name: 'Tata Steel ', Marketcap:175789.23},
  {position: 3, name: 'Tata Motors Limited ', Marketcap: 	109195.02 },
  {position: 4, name: 'Titan Company Limited ',Marketcap: 	163179.54},
  
];

 










@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;



  constructor() { }

  ngOnInit(): void {
  }

}
