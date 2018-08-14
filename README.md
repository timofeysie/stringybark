# The Stringybark Project

A JavaScript, CSS and SVG dot and line drawing app.  We will be reproducing this traditional technique.

A stringybark (Eucalyptus tetradonta) bark canvas is cut from the tree in the wet season when the sap is rising.  After heating in the fire, the bark is flattened under foot and weighted with stones or logs to dry flat.

Ochres in red, yellow and black are used along with mineral oxides of iron and manganese and white pipeclay, or calcium carbonate. Ochres may be fixed with a binder such as PVA glue, or previously, with the sap or juice of plants such as orchid bulbs.


## The wonderful line drawing SVG technique

Using the [Lengthy](https://www.npmjs.com/package/lengthy-svg) lib, the length will automatically be added to the element as a CSS Var to make it easy to do CSS animations of SVG stroke-dashoffset for the wonderful line drawing SVG technique.

However, it would be great to do it all ourselves using CSS variables and animations as a more solutrean solution.

[Here](http://next.plnkr.co/edit/F5vdyvScYPv046z17oGa?preview) is one of the starting points for a line drawing with.

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
  animation: dash 5s linear;
}
```

We don't really want a dash array, but if we make the dashes so long it covers all the shapes, it looks just like the complete shape as if it wasn't dashed at all. Next make stroke-dasharray a longer value than the length of the stroke. 

Then offset the strokes so that instead of covering all the shapes, it is not covering the entire shape.  It will look like the shape isn't there at all.  Next animate the strokes offset back to 0.

Let's show the strokes on ours:
```
<g id="g5184"
    style="stroke:#894635;stroke-linecap:round;stroke-linejoin:round">
    <path id="path5232" class="path" stroke="#000000"
         d="M 147.708,74.386 C 183.978,73.483 260,92.362 314.85,210.9 M 150.096,29.375 C 186.366,28.473 260,52.362 314.249,128.565 M 146.68,-10.47 c 43.987,0.383 113.403,17.886 169.145,82.884 M 149.027,-47.146 c 43.988,0.384 114.55,13.364 166.585,66.582 M 147.544,116.5 c 20.055,-0.26 102.456,-4.138 168.52,198.583"
         transform="matrix(0.7922,0,0,-0.97372,-116.303,771.26)"
```

We will need a class like this:
```
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}
@keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
}
```

This *works* but it's not exactly what we want.  The first problem is that all the lines start drawing at the same time.  We want to stagger them.  Also, two lines have to connect so one should start after the other, in groups so to speak.  Actually, there are thee curving horizontal lines which connect to create one line.  We should start from the top and move down.  There's also the back ground which we could paint or not.  Depending on how it looks with the bark background and without.

To co-ordinate this, we can use a promise chain.  It would be better than the dots nested promises.  Actually we should use async/await since that will also let us do one function after another in a more concise way.

Lets just change those Inkscape generated ids with our own in order.  Finally got all the lines in order, but the dasharray line drawing technique is not doing what we want.  Lets try creating an angular animation to trigger when the opacity is change.  We can put the keyframe there.  Since we have them appearing in the correct order, we just need to trigger the animations at the right times.

The problem with that idea is that we don't have a state variable to use as a trigger.  The trigger is the opacity changing from 0 to 1.  We can use an animation delay, which gets us close, but not every line takes the same time to draw, so we will have either a delay or a false start.  We will have to use the opacity change and also calculate the exact time it will take to finish the animation to set the delay on the next item.


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
<dot-component id="{{row+'-'+col}}"
```

At least we wont have to worry about the container collapsing when elements are removed from the DOM.

After this it was a slow matter of creating the array of rows and columns in the correct order to mimmick a person who would create the dots in lines but not necessary from top to bottom.  We also paint the back ground first and have one pattern run after another.


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
