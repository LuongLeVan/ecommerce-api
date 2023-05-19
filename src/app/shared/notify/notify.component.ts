import { Component,  Input,  OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
@Input() title:any =  '';
@Input() message:any =  '';
@Input() isLoginSuccess:boolean = false;
productList:any = [];
@Output() close =  new Subject<void>();


onClose(){
  this.close.next();
}

constructor(){

}

ngOnInit(): void {

}


}
