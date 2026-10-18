# Step 3 — Build a useful menu

**Focus:** Repeating loops and options · **Official CLO:** CLO2 · CLO3 · **Suggested week:** Week 9 / revisit Week 10

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

A do-while loop repeats the menu until the user chooses Exit. The guide requires at least five meaningful user operations plus Exit.

## Why this matters

A repeatable menu makes the expense tracker interactive and allows several records and queries during one run.

## Mini Java example

```java
int choice;
do {
    // Display meaningful operations.
    // Read choice and execute that operation.
} while (choice != 7);
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Create a menu with 1 Set budget, 2 Add expense, 3 Display all, 4 Search by category, 5 Update amount, 6 Budget summary, and 7 Exit. Make at least one feature work now. Reject invalid menu choices.

## Check your work in NetBeans

Choose two options without restarting the program; try choice 9; then choose Exit and check that the program ends.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

Why is a loop needed in the menu?

A. To use 2D arrays
B. To let users perform more than one operation before leaving
C. To replace input validation
D. To sort categories automatically

> **Hint (read only if needed):** Can someone add three expenses if the program immediately exits?

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

Which loop executes its body at least once?

A. for only
B. do-while
C. while only
D. None of them

> **Hint (read only if needed):** Think about whether the condition is checked first or last.

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

With choice 7 designated as Exit, which expression continues the menu loop?

A. choice == 7
B. choice != 7
C. choice <= 0
D. choice > 7

> **Hint (read only if needed):** The menu repeats until the Exit choice is selected.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** A do-while loop executes its body once before checking the condition.
