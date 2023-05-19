import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
  
})
export class CardComponent implements OnInit {
  @Input() image:any = '';
  @Input() title:any = '';
  @Input() price:any = '';
  @Input() id: any = '';
  @Input() description?:any  = '';

  ngOnInit(): void {
    if(this.title.length > 30){
      this.title = this.title.slice(0,30) + '...'
    }
  }

}
