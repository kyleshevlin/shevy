# Shevy

Vertical rhythm made easy. Typography how you want it, where you want it.

## Usage

1. Import `lib/_shevy.scss` into your project.

```
@import 'lib/shevy';
```

2. Define a `$shevy: ();` Sass map, like so:

```
$shevy: (
    'base-font-size': 1em,
    'base-line-height': 1.5,
    'base-font-scale': (3, 2.5, 2, 1.5, 1.25, 1)
);
```

3. Call the `headings` mixin in your code

```
@include headings;
```

4. Marvel at your beautiful typography. Assuming you've put something on the page. You have put something on the page, haven't you?

5. You can also pass a custom map into the `headings` and `paragraph` mixin. This should enable you to make custom typography per module or responsive typography per breakpoint.

## Other Options

### paragraph-scale

A map can be passed a key of `'paragraph-scale'` and set similarly to the 'base-font-scale'. If this is not provided, the value defaults to false and Shevy utilizes the last value passed into the `'base-font-scale'` list as the scale for paragraphs.

## Support

Currently, Shevy supports `px`, `em`, and `rem` usage. Additional support for other measurement units may be added in the future.

## Features to Add

Here are some features/situations we are hoping to account for in the near future.

- Exception mixins &mdash; The ability to create font sizes that override the main typographical settings.
- Recall mixins &mdash; If you use the `font-size: 0` hack for `inline-block` layouts, we would like you to be able to write a simple mixin with a heading or paragraph to output the font-sizes for that. Ex: `@include recall(h2)`.
- Handle situations with less than 6 font-sizes
- Add functionality for custom line-height-scale, similar to current implementation of font-size scale.
- Dunno yet. What do you want?
