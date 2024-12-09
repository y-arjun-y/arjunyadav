---
title: KENKEN
publish_date: Mar 15, 2022
meta_description: KENKEN is a Japanese math puzzle that combines sudoku with arithmetic operations (as if sudoku wasn't hard enough!)
meta_image: https://arjunyadav.net/Circle-Pattern.jpg
---

![Circle Pattern - British Library](/Circle-Pattern.jpg)

[Credit for the image above](https://unsplash.com/photos/l2kOjWEs_fU).

<small>Note: This post was last edited on Aug 26, 2022.</small>

[KENKEN](https://www.kenken.com) is a Japanese math puzzle that combines sudoku with arithmetic operations (as if sudoku wasn't hard enough!)

Here's an example of what the simplest possible KENKEN looks like[^1]:

<img src="/easiest-3x3.png" alt="Easy 3x3" height="350px" />

The first thing you should do[^2] when you're presented with a KENKEN puzzle is to **fill any empty squares with the number in the top left corner** (these cells are called "freebies"):

<img src="/easiest-3x3-1.png" alt="Easy 3x3 with the freebie filled in" height="350px" />

Alright, now what do we do? Notice the region with a "3÷". This is called a cage and we're supposed to fill two numbers that, when divided, equal 3 (the order doesn't matter).

There's an infinite number of possibilities for that! Thankfully, for an n x n puzzle, **we can only use the integers from 1 to n**.

So, the only possibility is 3 and 1. We borrow a rule from sudoku that says **we can only have one of each number in every row and column** and so, we place it as follows:

<img src="/easiest-3x3-2.jpeg" alt="Easy 3x3 with the freebie and the 3 division cage filled in" height="350px" />

The last cage we have in the bottom section of the puzzle is the "1-" cage. Well, we could do 3 and 2, but **there's no position for 3 that doesn't violate the sudoku rule.** The last possibility is 1 and 2, so we write that in:

<img src="/easiest-3x3-3.jpeg" alt="Easy 3x3 with the freebie, the 3 division cage and the 1 subtraction cage filled in" height="350px" />

Look at the middle row, without even seeing what the cage is about, we fill in 2 as no other number can come there! The same strategy can be applied in the first column to the left and we fill in the 1:

<img src="/easiest-3x3-4.jpeg" alt="Easy 3x3 with the freebie, the 3 division cage, the 1 subtraction cage and the 3 plus cage filled in" height="350px" />

We can employ the same time-saving strategy for the last cage, and we're done!

<img src="/easiest-3x3-5.jpeg" alt="A completed easy 3x3" height="350px" />

As a small exercise, try out this 4x4 puzzle!

<img src="/medium-4x4.jpg" alt="Try this medium 4x4 out" height="350px" />

Here are a few hints:

- Notice the "9+" cell. If we take the possible integers (4, 3, 2 and 1), they add up to 10. **In either a column or a row, all the possible numbers must be used, so the sum must be 10**.
- Don't focus your energy on "big cages". These will come to you later on as the number of possibilities decreases.

### Footnotes

[^1]: Well, it is possible to have a 1x1 and 2x2 KENKEN, but practically a 3x3 KENKEN is the simplest you can get.
[^2]: This isn't a strict rule, but it is a good practice to follow as a beginner.
