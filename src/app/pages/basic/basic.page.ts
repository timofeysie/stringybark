import { Component, 
  OnInit, Inject, AfterViewInit, Renderer2
} from '@angular/core';
import { DotComponent } from '../../components/dot/dot.component';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-page-detail',
  templateUrl: './basic.page.html',
  styleUrls: ['./basic.page.scss'],
})
export class BasicPage implements OnInit, AfterViewInit {
  rows: number [];
  cols: number [];
  constructor(@Inject(DOCUMENT) document,
    private renderer: Renderer2) { 
    console.log('const');
      this.rows = [0,1,2,3,4,5,6,7,8];
      this.cols = [0,1,2,3,4];
    }

    ngOnInit() {
      console.log('init');
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.cols.length; j++) {
          let item = document.getElementById(i+'-'+j);
          //console.log('item',item);
        }
      }
    }

    ngAfterViewInit() {
      let delay = 500;
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.cols.length; j++) {
          setTimeout(() => {
            let item: HTMLElement = document.getElementById(i+'-'+j);
            this.renderer.setStyle(item, 'opacity', '1');
          }, delay);
          delay += 500;
        }
      }
    }

}
