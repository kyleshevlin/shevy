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
    base-font-size: 1em,
    base-line-height: 1.5,
    base-font-scale: (3, 2.5, 2, 1.5, 1.25, 1)
);
```

3. Call the `headings` mixin in your code

```
@include headings;
```

4. Marvel at your beautiful typography. Assuming you've put something on the page. You have put something on the page, haven't you?

5. You can also pass a custom map into the `headings` and `paragraph` mixin. This should enable you to make custom typography per module or responsive typography per breakpoint.

## Defaults

```
$shevy: (
    base-font-size: 1em,
    base-line-height: 1.5,
    base-font-scale: (3, 2.5, 2, 1.5, 1.25, 1),
    paragraph-scale: false
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
