---
title: 'Shevy | Examples | With Defaults'
layout: examples
---

## Standard Implementation

While this is covered in the docs, I'll provide you an example here for those of you who skipped ahead.

Out of the box, Shevy has a set of defaults. At minimum, you can import Shevy into your project and then use the three typography mixins to get going.

```scss
@import 'shevy';

@include headings;
@include body;
@include content;
```

The results may suit your project, but if they don't, it's easy to change.

If you would like to make adjustments to the Shevy defaults, all you need to do is provide a `$shevy` map variable containing your own settings. For example, let's say you really want to use `rem` units instead of `em` units, you want a larger `line-height`, and you'd like to turn on `proximity`. You can override the default settings like so:

```scss
$shevy: (
  base-font-size: 1rem,
  base-line-height: 1.8,
  proximity: true
);
```

Under the hood, Shevy will merge your `$shevy` map with the defaults and then compile the math for you. The only thing you need to be sure to do is to declare the Sass map before calling the mixins, but this is just a principle of using Sass and not specific to Shevy.

Let's look at an a couple paragraphs with the default settings and a background provided by [Basehold.it](http://basehold.it/) to show vertical rhythm of the text.

<div class="standard_implementation">
  <p>
    The font size is in <code>ems</code> and the font scale is no special arithmetic pattern, just evenly spaced scaling. You can look up font scales on your own and even combine this package with other Sass packages for scaling.
  </p>

  <p>
    Some have asked me to turn Shevy into a package that provided arithmetically pleasing font scales, but I felt the focus of Shevy should be vertical rhythm. You work out the sizes. Shevy makes sure they line up properly.
  </p>
</div>

If you're paying attention, you'll notice that the `line-height` is smaller than the rest of the website. Also, `proximity` is turned off by default and is thus the paragraphs have not been brought closer together.

[Back to examples]({{ site.baseurl }}/examples)


