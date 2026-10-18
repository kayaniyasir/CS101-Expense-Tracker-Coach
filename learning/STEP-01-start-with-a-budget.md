# Step 1 — Start with a budget

**Focus:** Variables and arithmetic · **Official CLO:** CLO1 · **Suggested week:** Week 9

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

A variable stores one value. Keep budget, amount and totals separate. The budget must be positive; each expense amount must be positive. Remaining budget is budget minus total spending.

## Why this matters

Before using arrays, you should be able to calculate spending for one fictional expense and explain what a negative remaining budget means.

## Mini Java example

```java
double budget = 100.0;
double expense = 30.0;
double remaining = budget - expense;
System.out.println(remaining); // 70.0
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Create a Java console project in NetBeans. Read a positive budget and one positive expense amount. Calculate total spending and remaining budget. Prepare a one-page plan allocating meaningful code and tests among 4–5 team members.

## Check your work in NetBeans

Run budget 100 and amount 30. Show spending 30 and remaining budget 70. Reject budget 0. Use fictional expense details only.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

Which Java data type is suitable for an expense amount that may include decimals?

A. boolean
B. double
C. char
D. String

> **Hint (read only if needed):** Think of an amount such as 15.50.

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

What does a negative remaining budget mean?

A. The program must automatically erase an expense
B. Spending is higher than the starting budget
C. The budget was necessarily entered as a negative number
D. An array is full

> **Hint (read only if needed):** Compare total spending with the budget.

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

If budget = 100 and spending = 30, which expression gives the remaining budget?

A. spending - budget
B. budget + spending
C. budget - spending
D. budget / spending

> **Hint (read only if needed):** Remaining means what is left after spending.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** Use Scanner, double variables, and two range checks. Apply remaining = budget - expense.
