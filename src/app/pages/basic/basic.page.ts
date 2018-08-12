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
  order: any = [[0,0],[1,0],[1,1],[0,1],[2,0],[2,1],[2,2],[1,2],[0,2],
    [0,3],[1,3],[2,3],[3,3],[3,2],[3,1],[3,0],[4,0],[4,1],[4,2],[4,3],
    [4,4],[3,4],[2,4],[1,4],[0,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
    [5,4],[5,3],[5,2],[5,1],[5,0]];
  bgOrder: any = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
    [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],
    [0,2],[1,2],[2,2],[3,2],[4,2],[5,2]];
  delay;
  origDelay = 500;
  constructor(@Inject(DOCUMENT) document,
    private renderer: Renderer2) { 
    console.log('const');
      this.rows = [0,1,2,3,4,5,6,7,8];
      this.cols = [0,1,2,3,4,5,6,7,8];
    }

    ngOnInit() {
      console.log('init');
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.cols.length; j++) {
          let item = document.getElementById(i+'-'+j);
        }
      }
    }

    runOrder() {
      this.delay = this.origDelay;
      for (let i = 0; i < this.order.length; i++) {
        let row = this.order[i][0];
        let col = this.order[i][1];
        setTimeout(() => {
          let item: HTMLElement = document.getElementById(row+'-'+col);
          if (item) {
            this.renderer.setStyle(item, 'opacity', '1');
          }
        }, this.delay);
        this.delay += this.origDelay;
      }
    }

    runBgOrder() {
      this.delay = this.origDelay/4;
      for (let i = 0; i < this.bgOrder.length; i++) {
        let row = this.bgOrder[i][0];
        let col = this.bgOrder[i][1];
        setTimeout(() => {
          let item: HTMLElement = document.getElementById(row+'*'+col);
          if (item) {
            this.renderer.setStyle(item, 'background', 'bisque');
          }
        }, this.delay);
        this.delay += this.origDelay/4;
      }
    }

    inOrder() {
      this.delay = this.origDelay;
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.cols.length; j++) {
          setTimeout(() => {
            let item: HTMLElement = document.getElementById(i+'-'+j);
            this.renderer.setStyle(item, 'opacity', '1');
          }, this.delay);
          this.delay += this.origDelay;
        }
      }
    }

    ngAfterViewInit() {
      this.runBgOrder();
      setTimeout(() => {
        this.runOrder();
      },1500);
    }

}
