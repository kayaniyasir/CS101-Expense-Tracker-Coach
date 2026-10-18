# Step 7 — Test and explain your work

**Focus:** Testing and showcase · **Official CLO:** CLO4 · CLO7 · **Suggested week:** Weeks 14–15

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

A good test checks expected versus actual results. Include normal, invalid and boundary cases. At the showcase each student must explain code they wrote and trace or modify something in NetBeans.

## Why this matters

A plausible output is not enough; changing one expense should recompute totals, and invalid inputs must not change stored records.

## Mini Java example

```java
// Testing note (not part of the submitted solution):
// Budget = 100; one expense = 30
// Expected remaining = 70
// Actual remaining = ______
// Result = Pass / Fail
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Run and document at least six test cases from the Testing tab; include budget 100/expense 30, invalid categories and amounts, update, budget threshold, unknown record, full capacity. Prepare the NetBeans folder, 2–3 page report, ~3-minute team demonstration and ~2-minute individual code walkthrough.

## Check your work in NetBeans

Record actual outcomes for at least six passing tests, including normal, invalid and boundary types. Show your own method and explain a small modification.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

What is a boundary test?

A. Testing at or near a rule limit, such as capacity 10
B. Testing only a made-up description
C. Checking the website color
D. Testing only the Exit button

> **Hint (read only if needed):** Think of the smallest and largest allowed values.

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

Why retest the total after updating an expense?

A. Because changing one record must change summaries that depend on it
B. Because the category must change automatically
C. To increase the array capacity
D. To avoid displaying results

> **Hint (read only if needed):** The report depends on each stored amount.

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

Budget 100, an expense amount changes from 30 to 45. What should the new remaining budget be if this is the only expense?

A. 70
B. 145
C. 55
D. -45

> **Hint (read only if needed):** Use the updated amount, not the old amount.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** Run the program in NetBeans and record real results. Test just below, at and above important limits.
