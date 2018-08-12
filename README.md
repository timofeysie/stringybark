# Sassy Patterns

## The line pattern

http://next.plnkr.co/edit/F5vdyvScYPv046z17oGa?preview


## Getting Started

$ ng new sassy-app --style=scss
$ ng g component components/dot

## The dot pattern 

Creating a filed of svg dots that are responsive and added slowly in snake like manner is the goal.

At first wrong direction:
```
    ngAfterViewInit() {
      this.zone.run(() => {
        let d1 = this.renderer.createElement('dot-component');
        this.renderer.setAttribute(d1,'dotHeight','100'); 
        this.renderer.setAttribute(d1,'dotWidth','100'); 
        this.renderer.setAttribute(d1,'dotCx','50'); 
        this.renderer.setAttribute(d1,'dotCy','50'); 
        this.renderer.setAttribute(d1,'dotR','40'); 
        this.renderer.setAttribute(d1,'dotFill','brown'); 
        this.renderer.appendChild(this.dot.nativeElement,d1);
        console.log('this.dot.nativeElement',this.dot.nativeElement);  
      });
  }
```

This will never show up on the screen, though it appears in the DOM.

So went with changing the opacity using the renderer.  
```
let item: HTMLElement = document.getElementById(row+'-'+col);
this.renderer.setStyle(item, 'opacity', '1');
```            

And the template looks a little bit like this:
```
<dot-component #i:j id="{{row+'-'+col}}"></dot-component>
```

At least we wont have to worry about the container collapsing when elements are removed from the DOM.




# SassyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
