## Finding A CMS - Part 0

This project is part of my Finding A CMS series on my blog. Before I attach any backend, I built this locally to see if it could be done.

### Tasks

- [x] Load a list of posts onto the page
- [x] ? Render pages matching each individual post

### Data

- Test data is being loaded from `articls.js` in the project root. I had thoughts about changing it to JSON file.

- In an fleshed out application, async calls would be made to some database or cms.

### My Concerns

Mostly in regards to the dynamic page `[slug].js` within the `src/pages/blog`

- The code I have works, put I feel I did it incorrectly.
- In order to pull the data matching the slug, I used filter - this is not how you would normally do this - match post slugs
  - There is a step I am forgetting and it's stumped me.

I am most certain there is a better way to do it, I just don't know how at the moment.
