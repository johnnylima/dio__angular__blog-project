import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{


  @Input()
  tag:string = ""
  @Input()
  date:string = ""
  @Input()
  title:string = ""
  @Input()
  description:string = ""
  @Input()
  thumb:string = ""
  private id:string|null =""

  constructor(
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.route.paramMap.subscribe( val =>
      this.id = val.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(el => el.id == id)[0]
    // console.log('result-tag',result.tag);

      this.tag = result.tag
      this.date = result.date
      this.title = result.title
      this.thumb = result.thumb
      this.description = result.description

  }

}
