# CS101 Showcase — Project 3: Personal Expense Tracker

**A Java console project for NetBeans — not a website.**

This repository is a guided student **programming project**, based on the official CS101 Project Showcase Student and Instructor Guides. Students gradually build a **Personal Expense Tracker** using Java variables, input/output, conditions, loops, methods and parallel 1D arrays.

> **What is provided?** A runnable, deliberately **incomplete Java starter**, seven short programming lessons, 21 concept-and-code questions, an answer key with reasoning, the official 10-mark rubric, testing worksheet, team plan, and report outline. Students must code the required expense operations themselves.

## Start here: Open the Java project in NetBeans

1. Download the repository using **Code → Download ZIP**, then extract it; or clone with Git.
2. In **Apache NetBeans**, choose **File → Open Project**.
3. Select this repository folder (contains `pom.xml`). NetBeans can open it as a **Maven Java project**.
4. Open [`PersonalExpenseTracker.java`](src/main/java/cs101/expenses/PersonalExpenseTracker.java).
5. Run the program. It already shows a repeating menu and accepts a positive budget. Other menu options deliberately show **Not implemented yet** until students complete them.
6. Follow [Step 1 through Step 7](learning/README.md), edit the Java file, compile and test after each stage.

**Alternative without NetBeans:** Install JDK 17 or newer. From the repository root:

```bash
javac -d out src/main/java/cs101/expenses/PersonalExpenseTracker.java
java -cp out cs101.expenses.PersonalExpenseTracker
```

The `out` directory contains generated class files and should not be committed.

## Learning stages

| Step | Topic | Expected student work |
|---:|---|---|
| 1 | [Budget, variables and arithmetic](learning/STEP-01-start-with-a-budget.md) | Explain and calculate remaining budget |
| 2 | [Conditions and expense validation](learning/STEP-02-validate-expense-rules.md) | Reject invalid amounts and categories |
| 3 | [Repeating menu and loops](learning/STEP-03-build-a-useful-menu.md) | Handle menu choices and Exit |
| 4 | [Java methods](learning/STEP-04-write-clear-methods.md) | Implement meaningful methods with parameters and returns |
| 5 | [Parallel 1D arrays](learning/STEP-05-store-up-to-ten-expenses.md) | Add expenses, track count, reject 11th record |
| 6 | [Search, update and summaries](learning/STEP-06-search-update-and-summarize.md) | Find expenses, edit amounts, category totals and budget warnings |
| 7 | [Testing and walkthrough](learning/STEP-07-test-and-explain-your-work.md) | Record tests and explain personal code in NetBeans |

Every stage contains **2 Java concept questions + 1 applied programming question** with explanations available in a [separate answer key](learning/QUIZ_ANSWERS.md). These are **practice questions, not extra graded marks**.

## Official Project 3 requirements — quick reference

- Enter a **positive budget**.
- Store up to **10** fictional expenses with descriptions, one of **Food / Transport / Study / Other**, and a **positive amount**.
- Display expenses with record numbers; search by category; update the amount of an existing record by number.
- Display **total spending**, **remaining budget**, and **totals for all four categories**.
- **Warn** (rather than automatically reject valid expenses) when total spending exceeds the budget.
- Reject invalid amounts, categories, record numbers and capacity overflow.
- Follow shared CS101 rules: a repeating menu with at least **five meaningful operations plus Exit**, **four meaningful methods beyond main**, at least **two parallel 1D arrays** and an active counter, and **six documented tests**.

For the complete scope, see [REQUIREMENTS.md](REQUIREMENTS.md).

## Official assessment: 10 marks

**6 team marks:** fundamentals 1; selection 1; loops 0.5; methods 1.5; arrays 1.5; console I/O 0.5.

**4 individual marks:** explaining personally written code and logic 3; NetBeans debugging, tracing and modification 1.

Full breakdown: [RUBRIC.md](RUBRIC.md).

## Teamwork, testing and deliverables

- [TEST_PLAN.md](TEST_PLAN.md) — nine suggested normal, invalid and boundary tests with space for actual results.
- [TEAM_PLAN.md](TEAM_PLAN.md) — 4–5 member coding and testing responsibilities.
- [REPORT_OUTLINE.md](REPORT_OUTLINE.md) — brief 2–3 page report structure, team demonstration and individual walkthrough.
- **Final submission:** working Java console project in NetBeans, report, approximately three-minute team demo, and approximately two-minute individual walkthrough.

## Repository layout

```text
CS101-Expense-Tracker-Coach/
├── README.md                       ← this learning hub
├── pom.xml                         ← open this folder in NetBeans as a Java project
├── src/main/java/cs101/expenses/
│   └── PersonalExpenseTracker.java ← compilable student starter with TODOs
├── learning/
│   ├── README.md
│   ├── STEP-01-*.md ... STEP-07-*.md
│   └── QUIZ_ANSWERS.md
├── REQUIREMENTS.md
├── RUBRIC.md
├── TEST_PLAN.md
├── TEAM_PLAN.md
├── REPORT_OUTLINE.md
└── .github/workflows/validate.yml ← checks the starter compiles
```

## Student instructions

**Read → Answer → Code → Test → Explain.** Try each exercise and its questions independently. Use fictional data only. A short code example is not a complete project solution; you are responsible for implementing and understanding the missing features.

**Source:** CS101 Project Showcase Student Project Guide and Instructor Guide, Project 3 — Personal Expense Tracker. The guides determine assessment and required features; this repository provides extra *formative* support.
