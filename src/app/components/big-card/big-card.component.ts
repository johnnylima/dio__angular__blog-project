import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  @Input()
  id:string=""
  @Input()
  tag:string = ""
  @Input()
  date:string = ""
  @Input()
  title:string = ""
  @Input()
  preDescription:string = ""
  @Input()
  thumb:string = ""



  constructor(){}

  ngOnInit(): void {
  }
}
