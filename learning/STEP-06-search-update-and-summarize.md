# Step 6 — Search, update and summarize

**Focus:** Operations and category totals · **Official CLO:** CLO1 · CLO4 · CLO5 · **Suggested week:** Weeks 12–14

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

Search by category using a loop through the active records; update the amount by a valid record number; calculate total spending, remaining budget and totals for each category.

## Why this matters

These features show whether the program can manage real changes without losing track of related fields. Overspending must trigger a warning; an empty tracker must still work.

## Mini Java example

```java
double total = 0;
for (int i = 0; i < count; i++) {
    total += amounts[i];
}
double remaining = budget - total;
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Implement Display all (with record numbers), Search by category, Update an existing amount, and Budget summary. Show all four category totals. Reject invalid record numbers and updated amounts. Warn if total spending exceeds the budget.

## Check your work in NetBeans

Demonstrate one search, one update that changes totals, an unknown record number, an empty summary, and a warning when spending exceeds budget.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

Why is a loop useful for computing Food expenses?

A. It checks every active expense and adds only Food amounts
B. It increases each amount
C. It automatically changes categories
D. It generates a new budget

> **Hint (read only if needed):** You need to examine each record to decide which group it belongs to.

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

What should happen when spending exceeds the budget?

A. Erase all expenses
B. Reject every expense, even valid ones
C. Show an overspending warning and the remaining budget
D. Set all category totals to zero

> **Hint (read only if needed):** Does the requirement say warn or automatically prevent spending?

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

There are 3 expenses. Which array index represents record number 2 when updating it?

A. 0
B. 1
C. 2
D. 3

> **Hint (read only if needed):** Subtract one from the displayed record number.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** To update record number r, validate 1 <= r <= count and then use index r - 1. Recalculate sums after the update.
