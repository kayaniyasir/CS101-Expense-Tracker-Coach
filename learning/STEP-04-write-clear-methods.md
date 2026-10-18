# Step 4 — Write clear methods

**Focus:** Parameters and return values · **Official CLO:** CLO4 · **Suggested week:** Weeks 10–11

[← Learning index](README.md) | [Quiz explanations](QUIZ_ANSWERS.md)

## Learn (short explanation)

A method carries out a named task. Parameters provide input and return values give a result back. Your project needs at least four meaningful methods in addition to main.

## Why this matters

Small methods make the expense tracker easier to test, explain and divide fairly among 4–5 team members.

## Mini Java example

```java
static double remainingBudget(double budget, double spent) {
    return budget - spent;
}
```

This is a learning snippet, **not a completed project solution**.

## Your coding task

Design at least four meaningful method signatures, such as calculateTotal(double[],int) returning double; validAmount(double) returning boolean; searchByCategory(String[],int,String); and remainingBudget(double,double) returning double. Complete and call your own methods, without placing all logic in main.

## Check your work in NetBeans

For one method, show its call, explain what each parameter means, and predict its returned value. Record each team member’s programming responsibility.

## Concept and coding questions

Answer these **before opening the answer key**. Practice questions have **no extra course marks**.

### Question 1 — Concept

What is a parameter in a Java method?

A. An input value accepted by a method
B. An instruction to stop every loop
C. A predefined category
D. The number of array elements

> **Hint (read only if needed):** Look at budget and spent in the example method.

My choice: __________
My reason: _______________________________________________

### Question 2 — Concept

Why are smaller meaningful methods helpful?

A. They remove the need to test
B. They make tasks easier to understand, reuse and explain
C. They stop students from using arrays
D. They require every method to print text

> **Hint (read only if needed):** Would one very long main method be easy to debug?

My choice: __________
My reason: _______________________________________________

### Question 3 — Apply

Which signature returns total spending from a double array and an active record count?

A. static void calculateTotal()
B. static double calculateTotal(double[] amounts, int count)
C. static String calculateTotal()
D. static boolean calculateTotal(String name)

> **Hint (read only if needed):** A method calculating spending needs the recorded amounts and how many entries are active.

My choice: __________
My reason: _______________________________________________

## Completion check

- [ ] I can explain the concept in my own words.
- [ ] I answered all three questions and explained my choices.
- [ ] I made and tested the required change to my own Java project.
- [ ] I can demonstrate the evidence above in NetBeans.

**Need a hint?** What does the method need? What should it return? Keep method names understandable.
