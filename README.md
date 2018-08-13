# The Stringybark Project


There are at least two other strategies including step-by-step where you start by using the module loader, migrating to TypeScript, and many other steps.  Or there is the ngUpgrade approach where you can convert a feature at a time and both sites run side by side, or using UpgradeModule with NgModules... I went thru the PhoneCat Upgrade Tutorial but it was long and messy.
So yes, I think creating a new project with the CLI is a good first step.  With SCSS built in is a good option using a command like this: 
ng new brushlands-2 --style=scss


## The line pattern

[Here](http://next.plnkr.co/edit/F5vdyvScYPv046z17oGa?preview) is one of the starting points for a line drawing with.

A stringybark (Eucalyptus tetradonta) bark canvas is cut from the tree in the wet season when the sap is rising.  After heating in the fire, the bark is flattened under foot and weighted with stones or logs to dry flat.

Ochres in red, yellow and black are used along with mineral oxides of iron and manganese and white pipeclay, or calcium carbonate. Ochres may be fixed with a binder such as PVA glue, or previously, with the sap or juice of plants such as orchid bulbs.

The waves pattern is another good option for the first line drawing.  This is the basic layout of what was originally an [Inkscape](https://inkscape.org/en/) drawing:
```
<svg>
  <g id="g5184">
    <g id="g5186">
      <path id="path5188">
      <path id="path5242">
    </g>
  </g>
</svg>
```

The concept is that all path's must have a stroke like this:
```
<svg ...>
  <path class="path" stroke="#000000" ... >
</svg>
```

With a class:
```
.path {
  stroke-dasharray: 20;
}
```

Let's show the strokes on ours:
```
<g id="g5184"
    style="stroke:#894635;stroke-linecap:round;stroke-linejoin:round"
```

## The wonderful line drawing SVG technique

Using the [Lengthy](https://www.npmjs.com/package/lengthy-svg) lib, the length will automatically be added to the element as a CSS Var to make it easy to do CSS animations of SVG stroke-dashoffset for the wonderful line drawing SVG technique.

However, it would be great to do it all ourselves using CSS variables and animations as a more solutrean solution.


## Getting Started

Created a new project with Angular 6.1 with SCSS built in.
```
$ ng new sassy-app --style=scss
$ ng g component components/dot
```


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

## Responsive dots

The [Flexbox SVG a la Nico O](http://next.plnkr.co/edit/MXpmFahkBuDA2tTUKVNs?preview) plunker has a three-layer responsive layout that works great.



#

# The original readme

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
