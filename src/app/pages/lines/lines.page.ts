import { Component, 
  OnInit, Inject, AfterViewInit, Renderer2
} from '@angular/core';
import { DotComponent } from '../../components/dot/dot.component';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-page-detail',
  templateUrl: './lines.page.html',
  styleUrls: ['./lines.page.scss'],
})
export class LinesPage implements OnInit, AfterViewInit {
  origDelay = 500;
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
      console.log('paths',paths);
      for (let i = 0; i < paths.length; i++) {
          setTimeout(() => {
            let item: HTMLElement = document.getElementById('path'+i);
            this.renderer.setStyle(item, 'opacity', '1');
          }, delay);
          delay += this.origDelay;
          console.log('delay',delay);
      }
    }

}
