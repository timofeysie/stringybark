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

A simpler approach would be to just change those Inkscape generated ids with our own in  the correct order.  This worked pretty well.  Finally got all the lines in order, but the dasharray line drawing technique is not doing what we want.  

Tried creating an angular animation to trigger when the opacity is change and put the keyframe there.  Since we have them appearing in the correct order, we just need to trigger the animations at the right times.

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


# Deploying to Heroku

Heroku is a great service that we will be using to host this app.

The basic server file came [from this simple post](https://medium.com/@shubhsharma10/how-to-deploy-angular-6-app-to-heroku-52b73ac7a3aa).


Along with the server.js file the above blog added a postinstall script to the package.json file.

Another [blog](https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147) showed how to set up automatic deployments via GitHub which is where the source lives.  The initial deployment failed because the new additions hadn't been deployed.  Locally it said we had to run ```npm i```.

Those sound like solid tuts, but they don't work yet.

This is where the [site should be live](https://stringybark.herokuapp.com/), but it's broken.
```
$ heroku logs
 ›   Error: Missing required flag:
 ›     -a, --app APP  app to run command against
 ›   See more help with --help
```

Other advice: instead of
```
“postinstall”: “ng build --aot -prod”
```
try
```
“heroku-postbuild”: “ng build --prod”
```

But what about moving devDependencies into dependencies?  When we deploy 
Move the @angular/cli dependency and mix the server and the client code, doesn't that go down the wrong path?

But the error above seems to show that those are not the logs.  The local instance is not connected to Heroku via the terminal, but is set for automatic deployment via GitHub.  So trying this:
```
git remote add heroku git@heroku.com:stringybark.git
```

Now heroku logs works:
```
2018-10-28T14:27:25.302253+00:00 app[web.1]: > stringybark@0.0.1 start /app
2018-10-28T14:27:25.302254+00:00 app[web.1]: > node server.js
2018-10-28T14:27:25.575136+00:00 app[web.1]: module.js:550
2018-10-28T14:27:25.575156+00:00 app[web.1]: throw err;
2018-10-28T14:27:25.575157+00:00 app[web.1]: ^
2018-10-28T14:27:25.575160+00:00 app[web.1]: Error: Cannot find module 'express'
2018-10-28T14:27:25.575184+00:00 app[web.1]: at Function.Module._resolveFilename (module.js:548:15)
2018-10-28T14:27:25.575185+00:00 app[web.1]: at Function.Module._load (module.js:475:25)
2018-10-28T14:27:25.575186+00:00 app[web.1]: at Module.require (module.js:597:17)
2018-10-28T14:27:25.575187+00:00 app[web.1]: at require (internal/module.js:11:18)
2018-10-28T14:27:25.575188+00:00 app[web.1]: at Object.<anonymous> (/app/server.js:2:17)
2018-10-28T14:27:25.575189+00:00 app[web.1]: at Module._compile (module.js:653:30)
2018-10-28T14:27:25.575191+00:00 app[web.1]: at Object.Module._extensions..js (module.js:664:10)
2018-10-28T14:27:25.575192+00:00 app[web.1]: at Module.load (module.js:566:32)
2018-10-28T14:27:25.575193+00:00 app[web.1]: at tryModuleLoad (module.js:506:12)
2018-10-28T14:27:25.575194+00:00 app[web.1]: at Function.Module._load (module.js:498:3)
2018-10-28T14:27:25.583955+00:00 app[web.1]: npm ERR! errno 1
2018-10-28T14:27:25.585692+00:00 app[web.1]: npm ERR! stringybark@0.0.1 start: `node server.js`
2018-10-28T14:27:25.585846+00:00 app[web.1]: npm ERR! Exit status 1
2018-10-28T14:27:25.586270+00:00 app[web.1]: npm ERR! Failed at the stringybark@0.0.1 start script.
```



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
