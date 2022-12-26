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
  dataSmallCard

  constructor(){
    this.data = [...dataFake]
    this.dataBigCard = this.data[0]
    this.dataSmallCard = this.data
    if(this.dataSmallCard.length>3){
      // console.log('id',this.dataSmallCard[0].id);
      this.dataSmallCard.shift()
    }
  }
  ngOnInit(): void {
    // console.log(this.dataSmallCard);
  }


}
