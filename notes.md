Many of these are for the sake of polishing the project for presentation to prospective employees, not for this deliverable, so be sure to balance them accordingly.

- Build `Material Icons` and `font-awesome` libraries into the project with NPM/Webpack
- Slug names should not have spaces, since they'll appear in the URL (and URLs don't allow spaces)
   - `Secret Recipes` should be `secret-recipes` (lowercase letters, dashes in place of spaces)
- Book titles should be anchors to the book (not just the cover)
- Use `display: flex` in combination with `flex-direction: column` for the book `<article>` elements, setting the `<header>` to `flex-grow: 1`, so that the "Add to Cart" buttons will all line-up at the bottom of each book (this is optional, just a nice aesthetic)
- Set the `value` attribute for the `<data>` elements wrapping around the price, to the price itself as a number, for example: `<data value="9.63">$ 9.63</data>`
- Your categories look like they should be anchors, but are not. Even if they're not setup yet, use `<a href="#"></a>` at the very least as a placeholder - don't make an `<h2>` act like an `<a>`
- Not sure if you're aware, but "New", "Bestseller" and "Author" filters don't work
- Format your slider `<output>` to two decimal places (try `toFixed(2)`) and add a `$` so we know what it's doing
- How do you feel about sorting by date, but not showing the release date on the items? I'm asking because I'm not sure if that's strange or pretty standard. Have you seen examples of that? Might be interesting to check what other sites do with sorting by recency.
- The checkboxes should have a different look for `:hover` and `:checked`. For example, I check a box, then when I click again later to uncheck, it looks like nothing has changed because I'm still hovering over it so the box still looks checked. I clicked multiple times thinking it was broken - then I realized why
- "50% off all bestsellers" should either force check "NYT Bestsellers" (or whatever), or maybe be replaced. Perhaps put a featured book up there, or some kind of seasonal messaging
- Lower case your routes, for example `/CartPage` should be any of `/cart`, `/cartpage`, `/cart-page`, etc. Try to keep capital letters and spaces out of URLs where possible
- The "Books" link at the top of the page should lead back to the home page where the books are for now
   - Or better, move the home page to `/books` and then on the home page, just have some kind of season marketing, or a book feature, or even just a picture of a few books and a big button that says "Shop"
- `ProductArray` component isn't a product array, it's a single product view. I think `OneProduct` is the single product page. So the names are a bit confusing and should be fixed now that you have the entire scope planned out 
   - (This is pretty important, even before submitting, this is the kind of thing I'm look at when assessing)
- The filters are hidden for smaller screens, but don't open up when I click "Filter"
