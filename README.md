# Shevy

A simple, configurable Sass library for typography with perfect vertical rhythm.

## Installation

If you want to add this to a project, copy the `lib/` directory into the appropriate location in your app.

```
$ cp -R lib/ path/to/your/project
```

Then `@import` the `_shevy.scss` file into your project.

```scss
@import 'lib/shevy';
```

Be sure to place this _before_ any call to Shevy mixins and functions so that the Sass compiles without error.

#### Ruby on Rails

If you are using Ruby on Rails and would like to add Shevy to your project, you're in luck. Shevy is also a [Ruby Gem](https://rubygems.org/gems/shevy) and the repo can be found [here](https://github.com/kyleshevlin/shevy-gem). In your `Gemfile` add:

```ruby
gem 'shevy'
```

Then run:

```
$ bundle install
```

Once the gem is installed, add Shevy to your `application.css` file.

```
*= require shevy
```

And _then_ `@import` the `_shevy.scss` file into your project with:

```scss
@import 'shevy';
```

Once again, be sure to place this _before_ any call to Shevy mixins or functions so that the Sass compiles without error.

## Usage

Shevy comes packaged with default settings. So the simplest usage of Shevy is to call two mixins.

```scss
@include headings;
@include paragraph;
```

This will output styles for all headings (`h1` to `h6`) and the `p` tag. However, you may find that the default settings don't suit your project. Shevy allows you to configure settings globally and/or at the component level. Here's how:

### Global

Shevy mixins take a Sass map as one of the arguments. The default map is the `$shevy` map (`$shevy` is always defined, even if you don't define your own). Thus, to make global changes to your configuration, simply define your own `$shevy` map to override the default settings. Like so:

```scss
$shevy: (
    base-font-size: 14px,
    base-line-height: 1.5,
    base-font-scale: (2.5, 2.1, 1.8, 1.5, 1.25, 1)
);
```

Then, `@include` the `headings` mixin in your code

```
@include headings;
```

Now marvel at your beautiful typography. Assuming you've put something on the page. You have put something on the page, haven't you?

### Component Level

You can also pass a custom map into the `headings` and `paragraph` mixin. This should enable you to make custom typography per module or responsive typography per breakpoint.

Define a new Shevy map:

```scss
$shevy-small: (
  base-font-size: 12px,
  base-line-height: 1.3,
  base-font-scale: (2, 1.8, 1.6, 1.4, 1.2, 1)
);
```

Then call the `headings` or `paragraph` mixin passing your new map to them:

```scss
.my_component {
  @include headings($shevy-small);
  @include paragraph($shevy-small);
}
```

## Defaults

```
$shevy: (
    base-font-size: 1em,
    base-line-height: 1.5,
    base-font-scale: (3, 2.5, 2, 1.5, 1.25, 1),
    paragraph-scale: false,
    margin-bottom: true
);
```

### base-font-size

The `base-font-size` key is intended to be the standard font-size for the project. `font-scale` multiplies its value against the `base-font-size`.

### base-line-height

The `base-line-height` is the standard line-height. If this is set in pixels, this will be the base-spacing value for Shevy. If it is provided as a factor, such as `1.5`, it will be multiplied by the `base-font-size` to generate the base-spacing value.

### base-font-scale

This is a Sass list of factors to multiply by the `base-font-size` to generate the font-sizes for headings and paragraphs (if a `paragraph-scale` is not provided).

### paragraph-scale

This is intended for use in setting the size of the paragraph font-size, though by default is set to false. When set to false, Shevy uses the last value passed in the `font-scale` list to size the paragraph.

### margin-bottom

By default, margin bottoms are added to all typography to maintain the vertical rhythm. However, you may wish to remove these. In that case, setting `margin-bottom: false` in your map will set the `margin-bottom` property to `0` for each element.

## Functions

Currently, Shevy has one additonal function that can be useful to your project. Maintaining vertical rhythm also means that your other page elements (such as a `button`) should have margins that are multiples or divedends of your vertical rhythm. Thus, Shevy provides the `base-spacing()` function (with an alias of `bs()` for those who enjoy brevity).

The `base-spacing()` function takes two arguments, a `$factor` and a `$map`. The `$factor` defaults to 1 and the `$map` defaults to `$shevy`. Thus, the simplest call of this function looks like this:

```scss
.my_button {
  margin-bottom: base-spacing();
}
```

And outputs:

```css
.my_button {
  margin-bottom: 1.5em;
}
```

The output value is derived by multiplying the `base-font-size` and the `base-line-height` values of the map together. Multiply these by the `$factor` provided and you get multiples or dividends of your vertical rhythm. This function can be used to set paddings as well (Remember, `base-spacing()` has an alias).

```scss
.my_button {
  padding: bs(.25) bs(.5);
  margin-bottom: bs();
}
```

Or at a component level, remember our `$shevy-small` map from above:

```scss
.my_component {
  padding: bs(.25, $shevy-small) bs(.5, $shevy-small);
  margin-bottom: bs(1, $shevy-small);
}
```

## Support

Currently, Shevy supports `px`, `em`, and `rem` usage. Additional support for other measurement units may be added in the future.

## Features to Add

Here are some features/situations we are hoping to account for in the near future.

- Validation
- Exception mixins &mdash; The ability to create font sizes that override the main typographical settings.
- Recall mixins &mdash; If you use the `font-size: 0` hack for `inline-block` layouts, we would like you to be able to write a simple mixin with a heading or paragraph to output the font-sizes for that. Ex: `@include recall(h2)`.
- Handle situations with less than 6 font-sizes
- Add functionality for custom line-height-scale, similar to current implementation of font-size scale.
- Dunno yet. What do you want?

## License

The MIT License (MIT)

Copyright (c) 2015 Kyle Shevlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
