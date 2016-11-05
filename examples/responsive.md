---
title: 'Shevy | Examples | Responsive'
layout: examples
---

## Responsive

Using Shevy responsively isn't that different from using it on the component level. Instead of using Shevy's mixins in different selectors, we're going to use the mixins for the same selector under different media queries.

Let's start by writing some markup.

```html
<div class='responsive_example'>
  <p>
    As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.
  </p>
</div>
```

Next, in our Sass we'll declare a few different Shevy maps and apply them in several media queries.

```scss
$responsive-small: (
  base-font-size: 14px,
  base-line-height: 1.4
);

$responsive-medium: (
  base-font-size: 20px,
  base-line-height: 1.6
);

$responsive-large: (
  base-font-size: 2em,
  base-line-height: 1.8
);

.responsive_example {
  @include content($responsive-small);
}

@media (min-width: 600px) {
  .responsive_example {
    @include content($responsive-medium);
  }
}

@media (min-width: 1000px) {
  .responsive_example {
    @include content($responsive-large);
  }
}
```

Then, we can see the styles update as we resize the browser. Let's see it in action:

<div class="responsive_example">
  <p>
    As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.
  </p>
</div>

[Back to examples]({{ site.baseurl }}/examples)

