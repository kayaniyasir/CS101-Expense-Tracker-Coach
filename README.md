# CS101 Project 3 Coach — Personal Expense Tracker

**Build · Practice · Test** — a free, interactive Java learning website for the **Personal Expense Tracker** from the CS101 Project Showcase.

> This repository is a guided student-learning companion to the CS101 Student and Instructor Project Showcase Guides. The Instructor Guide was prepared by Dr. Alaa Al-Shamasneh. The official guide governs project requirements, team rules and grading. This site does not replace an instructor or automatically grade Java code.

## Open the learning site

- After enabling GitHub Pages with the included workflow: **https://kayaniyasir.github.io/CS101-Expense-Tracker-Coach/**
- To run offline: download the project and open `index.html` in a browser (all assets are local).

## What's included

- **7 short learning stages**, each with Learn → Understand → Code → Check.
- **21 interactive questions**: two conceptual and one applied question per stage, with hints, explanations and unlimited retries.
- A **parallel 1D array simulator** for ten fictional expense records.
- **9 suggested tests**; students must document at least **6 tests** covering normal, invalid and boundary cases.
- The official **10-mark rubric: 6 team marks + 4 individual marks**.
- A final project-requirement checklist and downloadable, locally stored progress backup.
- A minimal Java NetBeans starter (`starter/PersonalExpenseTracker.java`). **No full reference solution is provided before assessment.**

## Official Project 3 requirements

1. Enter a **positive budget**.
2. Add **up to 10 expenses** with description, category and positive amount.
3. Categories are **Food, Transport, Study and Other**.
4. Display each expense with a record number; search by category; update amounts by record number.
5. Display **total spending, remaining budget, and totals for every category**.
6. Warn when spending is above the budget.
7. Reject invalid budget/expense amounts, categories, record numbers and the eleventh expense.
8. Apply the common project requirements: repeating menu with Exit + 5 operations; at least 4 meaningful methods; 2+ parallel 1D arrays and record counter; input validation; 6+ documented tests; NetBeans Java console application using fictional records.

The following is a suggested *teaching convention*, not an added official requirement: menu options 1–7, numeric category choices 1–4, and user-facing record numbers starting at 1 (mapped to array index `recordNumber - 1`).

## Seven learning stages

1. Budget and arithmetic.
2. Conditions and the four categories.
3. Repeating menu.
4. Method parameters and return values.
5. Parallel 1D arrays and record counter.
6. Search, update, category totals and overspending warnings.
7. Test, debug and prepare the showcase.

**Students must implement their own solution in NetBeans.** Self-checks and quizzes do not generate marks, test Java code or prove completion.

## Run and test locally

```bash
# Run the website from the repository folder:
python -m http.server 8000
# Open http://localhost:8000

# Verify the content and Java starter:
node tests/validate.js
javac starter/PersonalExpenseTracker.java
java -cp starter PersonalExpenseTracker
```

### GitHub Pages

After you create the public repository named `CS101-Expense-Tracker-Coach`, upload all files and go to **Settings → Pages → Build and deployment → Source → GitHub Actions**. Run `.github/workflows/deploy-pages.yml` on `main`. GitHub Pages requires a one-time activation by the repository owner.

## Assessment

| Criteria | Marks | Basis |
|---|---:|---|
| Fundamentals | 1.0 | Team |
| Selection | 1.0 | Team |
| Loops | 0.5 | Team |
| Methods | 1.5 | Team |
| 1D arrays | 1.5 | Team |
| Console I/O | 0.5 | Team |
| Individual code explanation and tracing | 3.0 | Individual |
| NetBeans run/debug/trace/modify | 1.0 | Individual |
| **Total** | **10.0** | **6 team + 4 individual** |

This project does not require paid AI, accounts, additional frameworks or real personal information. Progress stays in browser storage and can be exported to JSON.