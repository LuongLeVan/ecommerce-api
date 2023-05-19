import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() name! : string;
  @Input() lastName! : string;
  @Input() email! : string;
  @Input() phone! : number;
  @Input() address! : string;
  @Output() close =  new Subject<void>();


  onClose(){
    this.close.next();
  }

}
