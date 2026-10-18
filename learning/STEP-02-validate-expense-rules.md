# Step 2 — Validate expense rules

**Focus:** Conditions and categories · **Official CLO:** CLO2 · **Suggested week:** Weeks 9–10

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

Use if/else to accept only positive amounts and the fixed categories Food, Transport, Study and Other. Choose a category with an explicit menu rather than asking students to invent categories.

## Why this matters

Invalid input must not enter your arrays or change the totals. A warning for spending above budget is different from rejecting an invalid expense.

## Mini Java example

```java
if (amount <= 0) {
    System.out.println("Invalid amount");
} else if (amount > budget) {
    System.out.println("Check your remaining budget");
}
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Add validation for budget, expense amount, category choice and record-number boundaries. Define a simple category mapping in your plan (1 Food, 2 Transport, 3 Study, 4 Other). Record the difference between rejection and overspending warning.

## Check your work in NetBeans

Demonstrate an amount of 0, -5, and a category choice of 5 being rejected. Confirm no record is stored after an invalid entry.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

Why do we validate a new expense before storing it?

A. To keep invalid values out of reports and arrays
B. To increase the array length
C. To skip all menu operations
D. To assign a letter grade

> **Hint (read only if needed):** Would an invalid amount be safe to include in a spending summary?

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

Which category is NOT allowed by the official Project 3 brief?

A. Food
B. Transport
C. Study
D. Entertainment

> **Hint (read only if needed):** There are exactly four categories.

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

Which condition rejects zero and negative expense amounts?

A. amount > 0
B. amount <= 0
C. amount == 100
D. amount < budget

> **Hint (read only if needed):** Ask whether zero is a positive number.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** Check amounts with <= 0. Valid categories are exactly the four named in the guide.
