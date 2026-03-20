## Code Review Exercise

### Issue #1: `a` tags are used as buttons for opening popups

The issue, why this is an issue, and the solution:

The “More Info” controls are implemented as `<a>` elements without `href`. That is not semantic for an in-page action, and keyboard/screen-reader behavior is inconsistent. These should be real `<button>` elements.

Initial code:

```html
<a class="more-info-button">More Info</a>
```

Updated code:

```html
<button
  type="button"
  class="more-info-button"
  aria-controls="origin-popup"
  aria-expanded="false"
>
  More Info
</button>
```

### Issue #2: Popup close buttons are missing accessible names

The issue, why this is an issue, and the solution:

Two close buttons have only an icon and no accessible name. Screen reader users cannot tell what the button does. Add `aria-label` (and optionally `title`) to every close button.

Initial code:

```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

Updated code:

```html
<button
  type="button"
  class="close-popup-button"
  aria-label="Close popup"
  title="Close popup"
>
  <i class="fa-solid fa-xmark" aria-hidden="true"></i>
</button>
```

### Issue #3: Submit/reset controls are outside the `<form>` element

The issue, why this is an issue, and the solution:

The submit and reset inputs are rendered outside the form. That breaks native submit/reset behavior unless the controls explicitly use the `form` attribute. Move them inside the `<form>`.

Initial code:

```html
<form>
  ...
</form>
<div class="form space-evenly-distributed-row-container form-buttons-container">
  <input class="form-button" type="submit" value="submit" />
  <input class="form-button" type="reset" value="reset" />
</div>
```

Updated code:

```html
<form>
  ...
  <div class="space-evenly-distributed-row-container form-buttons-container">
    <button class="form-button" type="submit">Submit</button>
    <button class="form-button" type="reset">Reset</button>
  </div>
</form>
```

### Issue #4: Form text fields are not properly labeled with `<label for>`

The issue, why this is an issue, and the solution:

The form uses `<span>` plus `aria-label`. That works partially, but semantic label association is better with real `<label for="...">`. It improves accessibility and click-target usability.

Initial code:

```html
<p class="label-input-group form-element-container">
  <span class="form-label">Name</span>
  <input aria-label="name" class="form-input-box" type="text" id="name" name="name" />
</p>
```

Updated code:

```html
<div class="label-input-group form-element-container">
  <label class="form-label" for="name"> Name </label>
  <input
    class="form-input-box"
    type="text"
    id="name"
    name="name"
    autocomplete="name"
  />
</div>
```

### Issue #5: Checkbox group should use `<fieldset>` and `<legend>`

The issue, why this is an issue, and the solution:

A group of related checkboxes should be inside a semantic fieldset so screen readers announce the group label correctly. Also, checkbox names should be consistent so submitted data is easier to process.

Initial code:

```html
<div class="form-fieldset form-element-container">
  <p class="form-label">What breeds would you like to learn?</p>
  <div>
    <input type="checkbox" id="siamese" name="breed1" value="siamese" />
  </div>
  ...
</div>
```

Updated code:

```html
<fieldset class="form-fieldset form-element-container">
  <legend class="form-label">What breeds would you like to learn?</legend>
  <label>
    <input type="checkbox" name="breeds" value="siamese" /> Siamese Cat
  </label>
  <label>
    <input type="checkbox" name="breeds" value="british-shorthair" /> British
    Shorthair
  </label>
  <label>
    <input type="checkbox" name="breeds" value="maine-coon" /> Maine Coon
  </label>
</fieldset>
```

### Issue #6: “Cat Facts” uses paragraph tags instead of list semantics

The issue, why this is an issue, and the solution:

This section is a list but is built with repeated `<p>` and decorative dots. That loses semantic meaning and can confuse assistive tech. Use `<ul>`/`<li>`.

Initial code:

```html
<div>
  <p class="cat-fact-list-item"><span class="bullet-point"></span>They all have one common ancestor: Susie</p>
  <p class="cat-fact-list-item"><span class="bullet-point"></span>The fold is due to a mutation</p>
</div>
```

Updated code:

```html
<ul class="cat-fact-list">
  <li>They all have one common ancestor: Susie</li>
  <li>The fold is due to a mutation</li>
  <li>They're born with straight ears</li>
</ul>
```

### Issue #7: Missing `main` landmark for primary page content

The issue, why this is an issue, and the solution:

The page has `header` and `footer` but no `main`. This makes keyboard/screen-reader landmark navigation less effective. Wrap primary content in `<main>`.

Initial code:

```html
<header>...</header>
<div class="dark-background-container section-below-navbar">...</div>
...
<footer class="footer">...</footer>
```

Updated code:

```html
<header>...</header>
<main>
  <div class="dark-background-container section-below-navbar">...</div>
  ...
</main>
<footer class="footer">...</footer>
```

### Issue #8: No visible keyboard focus styles on interactive elements

The issue, why this is an issue, and the solution:

Hover states exist, but there are no clear `:focus-visible` styles. Keyboard users need a clear focus indicator.

Initial code:

```css
.nav-link {
  text-decoration: none;
  color: var(--white);
}
```

Updated code:

```css
.nav-link:focus-visible,
.more-info-button:focus-visible,
.close-popup-button:focus-visible,
.form-button:focus-visible,
.navbar-circular-icon-button:focus-visible {
  outline: 3px solid var(--light-blue);
  outline-offset: 2px;
}
```

### Issue #9: Hero image is background-only, so it has no alt text

The issue, why this is an issue, and the solution:

The landing image is a background image on a `<div>`, which cannot provide alternative text. If the image is meaningful content, use an `<img>` with proper `alt`.

Initial code:

```html
<div class="landing-image"></div>
```

```css
.landing-image {
  background-image: url("./images/1920px-Adult_Scottish_Fold.jpg");
  background-position: center;
  background-size: cover;
}
```

Updated code:

```html
<img
  class="landing-image"
  src="./images/1920px-Adult_Scottish_Fold.jpg"
  alt="Adult Scottish Fold cat"
/>
```

```css
.landing-image {
  object-fit: cover;
}
```
