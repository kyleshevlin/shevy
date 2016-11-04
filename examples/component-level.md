---
title: 'Shevy | Examples | Component Level'
layout: examples
---

## Component Level

Shevy can easily be implemented per component just by nesting the various mixins under a class or id. This technique is utilized on the home page for the introduction paragraph. Let's go through an example.

Let's say we have a block of text that we want to be larger in font-size, and tighter in line-height. Perhaps this is a "callout" or a "quote" in your project.

Start by adding the appropriate markup:

```html
<div class="callout-example">
  <p>
    The best preparation for tomorrow is doing your best today.
  </p>
</div>
```

Then, make a new Sass map with the settings you'd like for this section. Give it a name other than `$shevy`.

```scss
$callout-shevy: (
  base-font-size: 2em,
  base-line-height: 1.3
);
```

The final step is to `@include` the mixins within your class selector in your styles. Be sure to pass your map as an argument to the mixins.

```scss
.callout-example {
  @include content($callout-shevy);
}
```

Let's see it in action below, once again using [Basehold.it](http://basehold.it/):

<div class="callout-example">
  <p>
    The best preparation for tomorrow is doing your best today.
  </p>
</div>

Once your typography is outside of the scope of your selector, it will return to the settings of the higher scope (most likely the `body` or `html` scope).

[Back to examples]({{ site.baseurl }}/examples)
