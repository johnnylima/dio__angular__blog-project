import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data
  dataBigCard

  constructor(){
    this.data = dataFake
    this.dataBigCard = this.data[0]
  }
  ngOnInit(): void {
    // console.log(this.data[0].tag);
  }


}
