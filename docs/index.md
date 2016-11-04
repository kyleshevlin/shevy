---
title: 'Shevy | Documentation'
layout: docs
---

## Documentation

### Installation

Shevy is a Sass library, and thus requires Sass to be installed on your machine and and some means of compiling Sass down to CSS. I leave the details of that setup to you.

#### Copy From Source

One way to add Shevy to your project is to copy from source. If you want to add this to a project, copy the `core/` directory into the appropriate location in your app.

```
$ cp -R core/ path/to/your/project
```

Then `@import` the `_shevy.scss` file into your project.

```scss
@import 'core/shevy';
```

Be sure to place this _before_ any call to Shevy mixins and functions so that the Sass compiles without error.

#### NPM

You can install Shevy as an NPM module with:

```
npm install --save shevy
```

Once installed, you can proceed to include the `core/_shevy.scss` file in your project. It will likely be nested a directory or so deeper than directly copying from source, so be sure you get your path correct. Something like this:

```scss
@import '../../node_modules/shevy/core/shevy';
```

At this time (October 2016), I have not attempted to use Shevy with any JS-to-CSS configuration such as requiring it in a Webpack module. Thus, I have no recommendations for how to use it in that way... yet.

#### Bower

You can install Shevy as a Bower component:

```
bower install --save shevy
```

Similar to the NPM installation, this will install the project in another directory, so be sure to get your path correct when trying to import it.

```scss
@import '../../bower_components/shevy/core/shevy';
```

#### Ruby on Rails

If you are using Ruby on Rails and would like to add Shevy to your project, you're in luck. Shevy is also a [Ruby Gem](https://rubygems.org/gems/shevy). In your `Gemfile` add:

```ruby
gem 'shevy'
```

Then run:

```
$ bundle install
```

Once the gem is installed, add Shevy to your project by adding:

```scss
@import 'shevy';
```

Once again, be sure to place this _before_ any call to Shevy mixins or functions so that the Sass compiles without error.

### Usage

Shevy comes packaged with default settings. So the simplest usage of Shevy is to call a few mixins.

```scss
@include headings;
@include body;
@include content;
```

This will output styles for all headings (`h1` to `h6`), several content tags (`p`, `ol`, `ul`, and `pre`), and set font-size and line-height for the `body` tag. However, you may find that the default settings don't suit your project. Shevy allows you to configure settings globally and/or at the component level. Here's how:

#### Global

Shevy mixins take a Sass map as one of the arguments. The default map is the `$shevy` map (`$shevy` is always defined, even if you don't define your own). Thus, to make global changes to your configuration, simply define your own `$shevy` map to override the default settings. Like so:

```scss
$shevy: (
  base-font-size: 14px,
  base-line-height: 1.5,
  base-font-scale: (2.5, 2.1, 1.8, 1.5, 1.25, 1),
  margin-bottom: true,
  proximity: false,
  proximity-factor: .85
);
```

Then, `@include` the `headings`, `body`, and `content` mixins in your code

```scss
@include headings;
@include body;
@include content;
```

Now marvel at your beautiful typography. Assuming you've put something on the page. You have put something on the page, haven't you?

#### Component Level

You can also pass a custom map into the `headings` and `paragraph` mixin. This should enable you to make custom typography per module or responsive typography per breakpoint.

Define a new Shevy map:

```scss
$shevy-small: (
  base-font-size: 12px,
  base-line-height: 1.3,
  base-font-scale: (2, 1.8, 1.6, 1.4, 1.2, 1)
);
```

Then call the any of the mixins, passing your new settings map as an argument:

```scss
.my_component {
  @include headings($shevy-small);
  @include content($shevy-small);
}
```

### Defaults

```scss
$shevy: (
    base-font-size: 1em,
    base-line-height: 1.5,
    base-font-scale: (3, 2.5, 2, 1.5, 1.25, 1),
    margin-bottom: true,
    proximity: false,
    proximity-factor: .85
);
```

#### base-font-size

The `base-font-size` key is intended to be the standard font-size for the project. `font-scale` multiplies its value against the `base-font-size`.

#### base-line-height

The `base-line-height` is the standard line-height. If this is set in pixels, this will be the base-spacing value for Shevy. If it is provided as a factor, such as `1.5`, it will be multiplied by the `base-font-size` to generate the base-spacing value.

#### base-font-scale

This is a Sass list of factors to multiply by the `base-font-size` to generate the font-sizes for headings and paragraphs (if a `paragraph-scale` is not provided).

#### margin-bottom

By default, margin bottoms are added to all typography to maintain the vertical rhythm. However, you may wish to remove these. In that case, setting `margin-bottom: false` in your map will set the `margin-bottom` property to `0` for each element.

#### proximity

In design, there is a phenomenon known as the proximity effect where our minds group things together that are close in spatial relation. Turning on proximity will enable you to apply a proximity factor to the margin-bottoms and base-spacing outputs, in effect, drawing content closer together. You might find this more aesthetically pleasing than strictly following the baseline.

#### proximity-factor

Proximity factor is a factor with which to adjust the base spacing of your typography without affecting the line-height spacing. This value will be multiplied against the calculated base-spacing value, _if_ `proximity` is set to `true` in your settings map.

### Functions

There are several public functions available to the developer to use as they please. Here is a list of them:

* `base-font-size()`, with alias `bsf()`
* `base-font-unit()`, with alias `bfu()`
* `base-line-height()`, with alias `blh()`
* `line-height-spacing()`, with alias `lhs()`
* `base-spacing()`, with alias `bs()`
* `settings()`

#### base-font-size

`base-font-size()` will return the `base-font-size` setting in the $shevy map, or the map passed to the function as an argument.

#### base-font-unit

`base-font-unit()` will determine whether the measurements have been defined in `px`, `em`, or `rem` and return the correct unit type. A map can be passed to the function as an argument.

#### base-line-height

`base-line-height()` will return the `base-line-height` setting in the $shevy map, or the map passed ot the function as an argument.

#### line-height-spacing

`line-height-spacing()` calculates the line-height spacing of the vertical rhythm by multiplying the base font size by the base line-height. A factor may be passed to the argument to return multiples or dividends of the line-height spacing.

#### base-spacing

`base-spacing()` calculates the base spacing of the vertical rhythm by multiplying the base font size by the base line-height, _with the additional math to handle proximity_, thus differentiating it from the `line-height-spacing()` function. A factor may be passed to the argument to return multiples or dividends of the base-spacing.

Example:

```scss
.button {
  padding: bs(.5) bs(2);
}
```

A map of settings can be passed as the second argument to adjust the output.

#### settings

`settings()` is a function utilized by Shevy to merge a map with the `$shevy-defaults` map. This ensures that the current map has all the settings it should. The user can use this to create new maps on the fly if they desire, though there isn't much of a purpose for that just yet.
