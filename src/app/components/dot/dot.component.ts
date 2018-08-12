import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dot-component',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {
  @Input() dotHeight: number;
  @Input() dotWidth: number;
  @Input() dotCx: number; 
  @Input() dotCy: number;
  @Input() dotR: number;
  @Input() dotFill: number;

  constructor() { 
  }

  ngOnInit() {
  }

}
