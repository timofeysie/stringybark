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
    [3,0],[3,1],[3,2],[4,2],[4,1],[4,0],[5,0],[5,1],[5,2],
    [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],
                  [5,4],[4,4],[3,4],[2,4],[1,4],[0,4],
                  [0,5],[1,5],[2,5],[3,5],[4,5],[5,5]];

  bgOrder1: any = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
                  [5,1],[4,1],[3,1],[2,1],[1,1],[0,1],
                  [0,2],[1,2],[2,2],[3,2],[4,2],[5,2]];
  bgOrder2: any = [[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],
                  [5,4],[4,4],[3,4],[2,4],[1,4],[0,4],
                  [0,5],[1,5],[2,5],[3,5],[4,5],[5,5]];
  origDelay = 500;
  constructor(@Inject(DOCUMENT) document,
    private renderer: Renderer2) { 
      this.rows = [0,1,2,3,4,5,6,7,8];
      this.cols = [0,1,2,3,4,5,6,7,8];
    }

    ngOnInit() {
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.cols.length; j++) {
          let item = document.getElementById(i+'-'+j);
        }
      }
    }

    runOrder() {
      let delay = 0;
      for (let i = 0; i < this.order.length; i++) {
        let row = this.order[i][0];
        let col = this.order[i][1];
        setTimeout(() => {
          let item: HTMLElement = document.getElementById(row+'-'+col);
          if (item) {
            this.renderer.setStyle(item, 'opacity', '1');
          }
        }, delay);
        delay += this.origDelay;
      }
    }

    runBgOrder1() {
      return new Promise((resolve) => {
        let delay1 = 0;
        for (let i = 0; i < this.bgOrder1.length; i++) {
          let row = this.bgOrder1[i][0];
          let col = this.bgOrder1[i][1];
          setTimeout(() => {
            let item: HTMLElement = document.getElementById(row+'*'+col);
            if (item) {
              this.renderer.setStyle(item, 'background', 'bisque');
            }
          }, delay1);
          delay1 += this.origDelay/4;
        }
        setTimeout(() => {
          resolve();
        },delay1);
      });
    }

    runBgOrder2() {
      return new Promise((resolve) => {
        let delay2 = this.origDelay/4;
        for (let i = 0; i < this.bgOrder2.length; i++) {
          let row = this.bgOrder2[i][0];
          let col = this.bgOrder2[i][1];
          setTimeout(() => {
            let item: HTMLElement = document.getElementById(row+'*'+col);
            if (item) {
              this.renderer.setStyle(item, 'background', 'white');
            }
          }, delay2);
          delay2 += this.origDelay/4;
        }
        resolve();
      });
    }

    inOrder() {
      let delay = this.origDelay;
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.cols.length; j++) {
          setTimeout(() => {
            let item: HTMLElement = document.getElementById(i+'-'+j);
            this.renderer.setStyle(item, 'opacity', '1');
          }, delay);
          delay += this.origDelay;
        }
      }
    }

    ngAfterViewInit() {
      this.runBgOrder1().then(() => {
        this.runBgOrder2().then(() => {
          setTimeout(() => {
            this.runOrder();
          },this.origDelay*5);
        });
      });
    }

}
