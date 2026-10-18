# Step 5 — Store up to ten expenses

**Focus:** Related 1D arrays · **Official CLO:** CLO5 · **Suggested week:** Weeks 12–13

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

Use three parallel one-dimensional arrays: description, category and amount. One index identifies one expense. A count variable tracks the active records; each new expense receives record number count + 1.

## Why this matters

Parallel arrays provide fixed storage with no advanced collection types. The limit of 10 expenses is a core requirement, not an optional rule.

## Mini Java example

```java
String[] descriptions = new String[10];
String[] categories = new String[10];
double[] amounts = new double[10];
int count = 0; // next empty index
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Create the three arrays and a counter. Read a description, one of four categories and a positive amount; store all at index count and increment count only after successful validation. Reject the eleventh expense.

## Check your work in NetBeans

Add three fictional expenses. Explain why record 3 is stored at index 2. Fill to 10 and verify that the eleventh addition is rejected.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

What are parallel 1D arrays?

A. Arrays that keep related values at matching indexes
B. Arrays that are always sorted
C. Arrays that store just one value
D. Arrays used only for loops

> **Hint (read only if needed):** Which index holds the category of the amount at index 2?

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

What does count represent?

A. The budget amount
B. The number of currently stored expense records
C. The total across categories
D. The last amount entered

> **Hint (read only if needed):** You can have ten available slots but only two expenses.

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

If count = 3, where should the fourth valid expense be stored?

A. Array index 4
B. Array index 10
C. Array index 3
D. Array index 0

> **Hint (read only if needed):** The first expense is at index 0.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** Do not update count before validating. Record number = array index + 1.
