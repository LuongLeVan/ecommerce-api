import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent  implements OnInit, OnChanges{
  @Input() selectList:any;  
  @Input() title:any;
  @Output() newValue = new EventEmitter<string>();
  value:string = '';

  constructor(){}
  
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  handleClick(value:string, event:any){
    this.value = value;
  
    this.newValue.emit(value);

  }
}
