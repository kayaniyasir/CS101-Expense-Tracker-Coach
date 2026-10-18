# Project 3 — Official requirements checklist

**Personal Expense Tracker:** Record fictional expenses and compare spending with a budget. This checklist is based on the CS101 Project Showcase guides; it does not add graded features.

## Expense rules

- [ ] Accept a positive starting budget; reject zero or negative budgets.
- [ ] Add expenses with description, category and positive amount.
- [ ] Use only Food, Transport, Study and Other as categories.
- [ ] Display stored expenses with clear record numbers.
- [ ] Search and display expenses by selected category.
- [ ] Update an existing expense amount by valid record number.
- [ ] Show total spending, remaining budget and spending total for each category.
- [ ] Warn when total expenses exceed the budget; allow the report to show negative remaining balance.
- [ ] Reject invalid expense amounts, categories, record numbers, menu choices and capacity overflow.

## Requirements common to all CS101 projects

- [ ] Provide a repeating menu, Exit and at least five meaningful operations.
- [ ] Use at least four meaningful methods beyond main with parameters and return values as appropriate.
- [ ] Use at least two related 1D arrays and an active record counter.
- [ ] Store up to 10 fictional expenses and reject the eleventh.
- [ ] Document at least six normal, invalid and boundary tests with expected and actual results.
- [ ] Work in a 4–5 student team with identifiable programming and tests for every member.
- [ ] Submit NetBeans source folder, 2–3 page report, team demonstration and individual walkthrough.

## Recommended program menu (an example, not a prescribed layout)

```text
1. Set budget
2. Add expense
3. Display all expenses
4. Search expenses by category
5. Update an amount by record number
6. Show spending and budget summary
7. Exit
```

## Suggested Java data structures

```java
String[] descriptions = new String[10];
String[] categories = new String[10];
double[] amounts = new double[10];
int count = 0;
```

The **same array index** identifies one record. The displayed record number is index + 1. The official guide lists `addExpense`, `displayExpenses`, `searchByCategory`, `updateExpense`, `calculateTotal`, and `displayBudgetSummary` as suggested methods, not mandatory exact names.

## Important clarification

The instructor guide specifies that **spending above budget should trigger a warning**, not invalidate an otherwise valid expense. An updated expense must cause totals to be recalculated. The fixed categories are **Food, Transport, Study, and Other**.

Use fictional descriptions and amounts only; do not enter real personal or financial data.
