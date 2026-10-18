# Concept and Coding Quiz — Answers and Reasoning

Try each [learning stage](README.md) first. These questions are formative: **they are not part of the official 10-mark assessment**.

## Step 1: Start with a budget

**Question 1 (Concept): B. double**

double supports values such as 12.75. String would store text, not a number to calculate with.

**Question 2 (Concept): B. Spending is higher than the starting budget**

Negative remaining is a warning of overspending; the project does not require rejecting an otherwise valid expense that exceeds the budget.

**Question 3 (Apply): C. budget - spending**

100 - 30 = 70, so subtract spending from the budget.

## Step 2: Validate expense rules

**Question 1 (Concept): A. To keep invalid values out of reports and arrays**

Validating first avoids changing stored data when the amount or category is wrong.

**Question 2 (Concept): D. Entertainment**

Only Food, Transport, Study and Other are valid fixed categories.

**Question 3 (Apply): B. amount <= 0**

An expense must be strictly positive; zero and all negative values must be rejected.

## Step 3: Build a useful menu

**Question 1 (Concept): B. To let users perform more than one operation before leaving**

The menu must repeat so users can add, search, update and summarize without restarting.

**Question 2 (Concept): B. do-while**

do-while checks the continuation condition after running its body.

**Question 3 (Apply): B. choice != 7**

Continue while the choice is not 7; choosing 7 stops the menu.

## Step 4: Write clear methods

**Question 1 (Concept): A. An input value accepted by a method**

A parameter receives information from the caller, enabling a method to work with different inputs.

**Question 2 (Concept): B. They make tasks easier to understand, reuse and explain**

Readable methods divide responsibilities and simplify testing and code walkthroughs.

**Question 3 (Apply): B. static double calculateTotal(double[] amounts, int count)**

Total spending can be a decimal, so a double return type is appropriate; the inputs are the amounts array and its active count.

## Step 5: Store up to ten expenses

**Question 1 (Concept): A. Arrays that keep related values at matching indexes**

At index i, the description, category and amount arrays all describe the same expense.

**Question 2 (Concept): B. The number of currently stored expense records**

count tracks records stored, while each array has a fixed capacity of 10.

**Question 3 (Apply): C. Array index 3**

Java indexes are zero-based, so the fourth expense goes at index 3 and uses record number 4.

## Step 6: Search, update and summarize

**Question 1 (Concept): A. It checks every active expense and adds only Food amounts**

Check all active records; when a category matches Food, add its amount to the Food subtotal.

**Question 2 (Concept): C. Show an overspending warning and the remaining budget**

The brief explicitly asks to warn when spending exceeds the budget.

**Question 3 (Apply): B. 1**

Record numbers are 1-based for users, while Java array indexes are 0-based; index = recordNumber - 1.

## Step 7: Test and explain your work

**Question 1 (Concept): A. Testing at or near a rule limit, such as capacity 10**

An 11th attempt and a zero amount exercise boundaries.

**Question 2 (Concept): A. Because changing one record must change summaries that depend on it**

Tests after updates reveal stale totals and indexing mistakes.

**Question 3 (Apply): C. 55**

100 - 45 = 55; updating a record must cause totals and remaining budget to be recalculated.
