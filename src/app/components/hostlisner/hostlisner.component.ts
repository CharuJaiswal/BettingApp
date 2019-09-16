import { Component, OnInit, Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({selector: '[appdemo]'})



@Component({
  selector: 'app-hostlisner',
  // template: '<button counting>Increment</button>',
  templateUrl: './hostlisner.component.html',
  styleUrls: ['./hostlisner.component.css']
})
export class HostlisnerComponent implements OnInit {
  changecolor: any;
  ishovering: boolean;

  constructor( private el: ElementRef,private renderer: Renderer) {
  
   }
 @HostListener('click') dosome (){
 alert('lost listner click')
   //this.changecolor('red');
 }
 @HostListener('mouseover') onHover() {
  window.alert("hover");
}
@HostListener('mouseout') onOut() {
  window.alert("hjfxgjhlf;xgyh;fxghlfxk");
}
  ngOnInit() {
  }

}
