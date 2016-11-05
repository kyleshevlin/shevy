---
title: 'Shevy | Examples | Base Spacing'
layout: examples
---

## Base Spacing

This is probably one of my favorite features of Shevy. In order to align things properly, Shevy calculates a base distance and then sets all `line-height`s and `margin-bottom`s as multiples of this distance (with some alterations if `proximity` is turned on). Why not use this math for other purposes. After all, it does us no good to painstakingly align our typography if we break the rhythm the moment we put another item on the page.

Shevy's API exposes a `base-spacing()` function (and its alias `bs()`). This function can be used to set margins, paddings, widths, heights, or any other CSS property that can use a `px`, `em`, or `rem` measurement.

For example, let's make a box with some text inside it. But this box will sit on the same baseline as all the text around it.

As with our other examples, let's start with some markup:

```html
<div class="base_spacing_example">
  <p>
    Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.
  </p>

  <div class="base_spacing_example-box">
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
  </div>

  <p>
    We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.
  </p>
</div>
```

Then, we'll setup our styles. The `base-spacing()` functions second argument takes a Shevy map, but defaults to the `$shevy` map of your project. Since we're going to use a custom map for this example, I'll show you how to alias the `bs()` function to always use your custom map.

```scss
$base-spacing-shevy: (
  base-font-size: 18px,
  base-line-height: 1.8
);

@function my-bs($factor: 1) { // Default factor of one
  @return bs($factor, $base-spacing-shevy);
}

.base_spacing_example {
  @include content($base-spacing-shevy);

  &-box {
    background: hsl(197, 60%, 50%); // My "brand" color
    color: white;
    padding: my-bs(2); // Will return 18px * 1.8 or 32.4px
    margin: my-bs();

    p {
      margin-bottom: 0; // our inner paragraph doesn't need a margin bottom
    }
  }
}
```

Let's take a look. Our [Basehold.it](http://basehold.it/) grid may be a bit off due to subpixel rounding errors. This is to be expected and results may vary by browser.

<div class="base_spacing_example">
  <p>
    Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.
  </p>

  <div class="base_spacing_example-box">
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
  </div>

  <p>
    We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.
  </p>
</div>

As you can see, our text is aligned and our padding and margins are multiples of our base spacing. For the record, you can pass in a `$factor` less than one to your `bs()` function. For example, using `bs(.5)` will return a value that is half a base spacing distance. Now that you see how it works, hope you enjoy it as much as I do.

[Back to examples]({{ site.baseurl }}/examples)