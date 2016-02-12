# toFullScreen.js

**toFullScreen.js** is a jQuery plugin intended to **render fullscreen an element with respect to it's original ratio** (it could be an image, a video, an iframe...).

Everyone who has already tried to have a popin with a youtube video which fit the screen (whatever the screen size is) AND with respect to it's original ratio, knows that this is not trivial. This plugins makes it a really easy task! (see example 6 below, which is the more interesting use case).

Features :
* Render an element fullscreen
* Preserve element's original ratio
* Responsive
* Lightweight and easy to use

## Examples :

<a href="http://codepen.io/FrancoisV/pen/vLvQYV" target="_blank">Example 1</a> : a youtube iframe (original size 560x315, i.e. 16/9 ratio)  
<a href="http://codepen.io/FrancoisV/pen/JGweyZ" target="_blank">Example 2</a> : a youtube iframe (original size 420x315, i.e. 4/3 ratio)  
<a href="http://codepen.io/FrancoisV/pen/YwdKZe" target="_blank">Example 3</a> : an image (original size 1000x1000)  
<a href="http://codepen.io/FrancoisV/pen/LGMgLy" target="_blank">Example 4</a> : an image (original size 300x900). toFullScreen minMargin option set to 100  
<a href="http://codepen.io/FrancoisV/pen/qbLJLP" target="_blank">Example 5</a> : an image (original size 1300x200). toFullScreen coeff option set to 0.8  
<a href="http://codepen.io/FrancoisV/pen/OMrazP" target="_blank">Example 6</a> : open a video popin (original size 560x315, i.e. 16/9 ratio). toFullScreen minMargin option set to 30

## Usage :

1) Be sure to have included jQuery on your page.

2) Then include the script, after jQuery :
```html
<script src="js/toFullScreen.js"></script>
```

3) Include in your body an element you want to render fullSize :
```html
<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/IyTv_SR2uUo" frameborder="0" allowfullscreen></iframe>
```
Be sure to let in your code the element's original sizes, should it be in the html or in the css (e.g. here : width="560" height="315"). The script needs it to calculate the original element's ratio.

4) Target the element and init the plugin :
```javascript
<script>
  $(function() {
    $(".video").toFullScreen();
  });
</script>
```

## Options

You can pass some options to the plugin like this :
```javascript
<script>
  $(function() {
    $(".video").toFullScreen({
      minMargin: 30,
      coeff: 0.9
    });
  });
</script>
```

minMargin: 30 // minimum margins around the element (this is a *minimum* margin because it can be more on top/bottom OR left/right due to preservation of the original ratio). Default value is 0

coeff: 0.9, // by default the element will occupy the max it can (minus the margins), with respect to it's original ratio. But it you prefer it to be only, let's say 90%, just set the coeff to 0.9. The value should be between 0 and 1. Default is 1.

# Contributing

1. Fork it!  
2. Create your feature branch: `git checkout -b my-new-feature`  
3. Code amazing things!  
4. When you are done, run "gulp" to export the minified version of toFullScreen.js  
3. Commit your changes: `git commit -am 'Add some feature'`  
4. Push to the branch: `git push origin my-new-feature`  
5. Submit a pull request :D

## Licensing

Copyright © 2016 Francois Versepuy  
Follow <a href="https://twitter.com/fanfan92" target="_blank">Francois Versepuy</a> on Twitter

Special thanks to Ariel Dorol for his opinions and contributions on this.  
Follow <a href="https://twitter.com/darkylmnx" target="_blank">Ariel Dorol</a> on Twitter

Under MIT LICENSE
