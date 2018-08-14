import { Component, 
  OnInit, Inject, AfterViewInit, Renderer2
} from '@angular/core';
import { DotComponent } from '../../components/dot/dot.component';
import { DOCUMENT } from '@angular/common'; 
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-page-detail',
  templateUrl: './lines.page.html',
  styleUrls: ['./lines.page.scss'],
  animations: [
    trigger('path', [
      state('inactive', style({
        'stroke-dashoffset': '0',
      })),
      state('active',   style({
        'stroke-dashoffset': '1',
      })),
      transition('inactive => active', animate('dash 10s linear forwards'))
    ])
  ]
})
export class LinesPage implements OnInit, AfterViewInit {
  origDelay = 400;
  constructor(@Inject(DOCUMENT) document,
    private renderer: Renderer2) { 
    }

    ngOnInit() {
    }

    /** This kicks off the promise chain to paint the background and then
     * follow a specific consecutive route to fill in the dots.
     */
    ngAfterViewInit() {
      this.inOrder();
    }

    inOrder() {
      let delay = this.origDelay;
      let paths = document.getElementsByClassName('path');
      let origSmallDelay = 4;
      let smallDelay = -4;
      for (let i = 0; i < paths.length; i++) {
          setTimeout(() => {
            let item: HTMLElement = document.getElementById('path'+i);
            this.renderer.setStyle(item, 'opacity', '1');
            this.renderer.setStyle(item, 'animation-delay', smallDelay+'s');
            smallDelay += origSmallDelay;
          }, delay);
          delay += this.origDelay;
      }
    }

}
