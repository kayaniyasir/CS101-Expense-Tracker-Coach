
'use strict';
window.COACH_DATA = {
  "title": "Personal Expense Tracker",
  "rubric": [
    {
      "name": "Fundamentals",
      "clo": "CLO1",
      "points": 1,
      "basis": "Team",
      "evidence": "Suitable budget, amount and count variables (0.5); correct spending and remaining-budget calculations (0.5)."
    },
    {
      "name": "Selection statements",
      "clo": "CLO2",
      "points": 1,
      "basis": "Team",
      "evidence": "Category and amount validation (0.5); menu decisions and overspending warning (0.5)."
    },
    {
      "name": "Loops",
      "clo": "CLO3",
      "points": 0.5,
      "basis": "Team",
      "evidence": "Repeating menu until Exit (0.25); traversal for searching and summaries (0.25)."
    },
    {
      "name": "Methods",
      "clo": "CLO4",
      "points": 1.5,
      "basis": "Team",
      "evidence": "At least four meaningful methods (0.5); suitable parameters (0.5); useful return values and correct calls (0.5)."
    },
    {
      "name": "Parallel 1D arrays",
      "clo": "CLO5",
      "points": 1.5,
      "basis": "Team",
      "evidence": "Related description/category/amount arrays and record count (0.5); search/update (0.5); category and budget summaries (0.5)."
    },
    {
      "name": "Console input/output",
      "clo": "CLO6",
      "points": 0.5,
      "basis": "Team",
      "evidence": "Clear input prompts (0.25); understandable reports and error/warning messages (0.25)."
    },
    {
      "name": "Explain personal code",
      "clo": "CLO4",
      "points": 3,
      "basis": "Individual",
      "evidence": "Explain personally written methods, parameters and returns (1.0); explain logic (1.0); trace an example (1.0)."
    },
    {
      "name": "NetBeans walkthrough",
      "clo": "CLO7",
      "points": 1,
      "basis": "Individual",
      "evidence": "Run (0.25); debug (0.25); trace (0.25); demonstrate or explain a small modification (0.25)."
    }
  ],
  "requirements": [
    {
      "id": "budget",
      "text": "Accept a positive starting budget; reject zero or negative budgets.",
      "step": 0
    },
    {
      "id": "add",
      "text": "Add expenses with description, category and positive amount.",
      "step": 4
    },
    {
      "id": "categories",
      "text": "Use only Food, Transport, Study and Other as categories.",
      "step": 1
    },
    {
      "id": "list",
      "text": "Display stored expenses with clear record numbers.",
      "step": 5
    },
    {
      "id": "find",
      "text": "Search and display expenses by selected category.",
      "step": 5
    },
    {
      "id": "update",
      "text": "Update an existing expense amount by valid record number.",
      "step": 5
    },
    {
      "id": "summary",
      "text": "Show total spending, remaining budget and spending total for each category.",
      "step": 5
    },
    {
      "id": "overspend",
      "text": "Warn when total expenses exceed the budget; allow the report to show negative remaining balance.",
      "step": 5
    },
    {
      "id": "validate",
      "text": "Reject invalid expense amounts, categories, record numbers, menu choices and capacity overflow.",
      "step": 5
    },
    {
      "id": "menu",
      "text": "Provide a repeating menu, Exit and at least five meaningful operations.",
      "step": 2
    },
    {
      "id": "methods",
      "text": "Use at least four meaningful methods beyond main with parameters and return values as appropriate.",
      "step": 3
    },
    {
      "id": "arrays",
      "text": "Use at least two related 1D arrays and an active record counter.",
      "step": 4
    },
    {
      "id": "capacity",
      "text": "Store up to 10 fictional expenses and reject the eleventh.",
      "step": 4
    },
    {
      "id": "tests",
      "text": "Document at least six normal, invalid and boundary tests with expected and actual results.",
      "step": 6
    },
    {
      "id": "team",
      "text": "Work in a 4–5 student team with identifiable programming and tests for every member.",
      "step": 0
    },
    {
      "id": "deliver",
      "text": "Submit NetBeans source folder, 2–3 page report, team demonstration and individual walkthrough.",
      "step": 6
    }
  ],
  "tests": [
    {
      "id": "t1",
      "name": "Budget and one expense",
      "kind": "Normal",
      "input": "Set budget 100; add Food amount 30",
      "expected": "Total spending = 30; remaining budget = 70"
    },
    {
      "id": "t2",
      "name": "Zero and negative budget",
      "kind": "Invalid",
      "input": "Set starting budget 0, then -10",
      "expected": "Both rejected; budget must be positive"
    },
    {
      "id": "t3",
      "name": "Zero and negative expense",
      "kind": "Invalid",
      "input": "Try expense 0, then -4",
      "expected": "Both rejected; expense count and totals unchanged"
    },
    {
      "id": "t4",
      "name": "Wrong category",
      "kind": "Invalid",
      "input": "Try category Sports (not in the list)",
      "expected": "Reject category; no record added"
    },
    {
      "id": "t5",
      "name": "Update an existing expense",
      "kind": "Normal",
      "input": "Budget 100; expense record 1 = 30, then update to 45",
      "expected": "Total changes to 45; remaining budget changes to 55"
    },
    {
      "id": "t6",
      "name": "At and above the budget",
      "kind": "Boundary",
      "input": "Budget 100; total spending = 100; then increase to 101",
      "expected": "At 100: remaining 0. At 101: remaining -1 and overspending warning"
    },
    {
      "id": "t7",
      "name": "Unknown record number",
      "kind": "Invalid",
      "input": "With 2 records, try updating record 0 and record 3",
      "expected": "Reject both; original amounts unchanged"
    },
    {
      "id": "t8",
      "name": "Capacity limit",
      "kind": "Boundary",
      "input": "Add 10 valid expenses; attempt an 11th",
      "expected": "Reject 11th; count stays 10"
    },
    {
      "id": "t9",
      "name": "Empty expense summary",
      "kind": "Boundary",
      "input": "Budget 100; display summary before adding expenses",
      "expected": "Total spending 0; remaining budget 100; category totals 0"
    }
  ],
  "steps": [
    {
      "title": "Start with a budget",
      "subtitle": "Variables and arithmetic",
      "week": "Week 9",
      "clo": "CLO1",
      "icon": "",
      "time": "10–15 min",
      "learn": "A variable stores one value. Keep budget, amount and totals separate. The budget must be positive; each expense amount must be positive. Remaining budget is budget minus total spending.",
      "why": "Before using arrays, you should be able to calculate spending for one fictional expense and explain what a negative remaining budget means.",
      "code": "double budget = 100.0;\ndouble expense = 30.0;\ndouble remaining = budget - expense;\nSystem.out.println(remaining); // 70.0",
      "build": "Create a Java console project in NetBeans. Read a positive budget and one positive expense amount. Calculate total spending and remaining budget. Prepare a one-page plan allocating meaningful code and tests among 4–5 team members.",
      "evidence": "Run budget 100 and amount 30. Show spending 30 and remaining budget 70. Reject budget 0. Use fictional expense details only.",
      "hint": "Use Scanner, double variables, and two range checks. Apply remaining = budget - expense.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "Which Java data type is suitable for an expense amount that may include decimals?",
          "options": [
            "boolean",
            "double",
            "char",
            "String"
          ],
          "answer": 1,
          "why": "double supports values such as 12.75. String would store text, not a number to calculate with.",
          "hint": "Think of an amount such as 15.50."
        },
        {
          "kind": "Concept",
          "q": "What does a negative remaining budget mean?",
          "options": [
            "The program must automatically erase an expense",
            "Spending is higher than the starting budget",
            "The budget was necessarily entered as a negative number",
            "An array is full"
          ],
          "answer": 1,
          "why": "Negative remaining is a warning of overspending; the project does not require rejecting an otherwise valid expense that exceeds the budget.",
          "hint": "Compare total spending with the budget."
        },
        {
          "kind": "Apply",
          "q": "If budget = 100 and spending = 30, which expression gives the remaining budget?",
          "options": [
            "spending - budget",
            "budget + spending",
            "budget - spending",
            "budget / spending"
          ],
          "answer": 2,
          "why": "100 - 30 = 70, so subtract spending from the budget.",
          "hint": "Remaining means what is left after spending."
        }
      ]
    },
    {
      "title": "Validate expense rules",
      "subtitle": "Conditions and categories",
      "week": "Weeks 9–10",
      "clo": "CLO2",
      "icon": "",
      "time": "10–15 min",
      "learn": "Use if/else to accept only positive amounts and the fixed categories Food, Transport, Study and Other. Choose a category with an explicit menu rather than asking students to invent categories.",
      "why": "Invalid input must not enter your arrays or change the totals. A warning for spending above budget is different from rejecting an invalid expense.",
      "code": "if (amount <= 0) {\n    System.out.println(\"Invalid amount\");\n} else if (amount > budget) {\n    System.out.println(\"Check your remaining budget\");\n}",
      "build": "Add validation for budget, expense amount, category choice and record-number boundaries. Define a simple category mapping in your plan (1 Food, 2 Transport, 3 Study, 4 Other). Record the difference between rejection and overspending warning.",
      "evidence": "Demonstrate an amount of 0, -5, and a category choice of 5 being rejected. Confirm no record is stored after an invalid entry.",
      "hint": "Check amounts with <= 0. Valid categories are exactly the four named in the guide.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "Why do we validate a new expense before storing it?",
          "options": [
            "To keep invalid values out of reports and arrays",
            "To increase the array length",
            "To skip all menu operations",
            "To assign a letter grade"
          ],
          "answer": 0,
          "why": "Validating first avoids changing stored data when the amount or category is wrong.",
          "hint": "Would an invalid amount be safe to include in a spending summary?"
        },
        {
          "kind": "Concept",
          "q": "Which category is NOT allowed by the official Project 3 brief?",
          "options": [
            "Food",
            "Transport",
            "Study",
            "Entertainment"
          ],
          "answer": 3,
          "why": "Only Food, Transport, Study and Other are valid fixed categories.",
          "hint": "There are exactly four categories."
        },
        {
          "kind": "Apply",
          "q": "Which condition rejects zero and negative expense amounts?",
          "options": [
            "amount > 0",
            "amount <= 0",
            "amount == 100",
            "amount < budget"
          ],
          "answer": 1,
          "why": "An expense must be strictly positive; zero and all negative values must be rejected.",
          "hint": "Ask whether zero is a positive number."
        }
      ]
    },
    {
      "title": "Build a useful menu",
      "subtitle": "Repeating loops and options",
      "week": "Week 9 / revisit Week 10",
      "clo": "CLO2 · CLO3",
      "icon": "",
      "time": "15–20 min",
      "learn": "A do-while loop repeats the menu until the user chooses Exit. The guide requires at least five meaningful user operations plus Exit.",
      "why": "A repeatable menu makes the expense tracker interactive and allows several records and queries during one run.",
      "code": "int choice;\ndo {\n    // Display meaningful operations.\n    // Read choice and execute that operation.\n} while (choice != 7);",
      "build": "Create a menu with 1 Set budget, 2 Add expense, 3 Display all, 4 Search by category, 5 Update amount, 6 Budget summary, and 7 Exit. Make at least one feature work now. Reject invalid menu choices.",
      "evidence": "Choose two options without restarting the program; try choice 9; then choose Exit and check that the program ends.",
      "hint": "A do-while loop executes its body once before checking the condition.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "Why is a loop needed in the menu?",
          "options": [
            "To use 2D arrays",
            "To let users perform more than one operation before leaving",
            "To replace input validation",
            "To sort categories automatically"
          ],
          "answer": 1,
          "why": "The menu must repeat so users can add, search, update and summarize without restarting.",
          "hint": "Can someone add three expenses if the program immediately exits?"
        },
        {
          "kind": "Concept",
          "q": "Which loop executes its body at least once?",
          "options": [
            "for only",
            "do-while",
            "while only",
            "None of them"
          ],
          "answer": 1,
          "why": "do-while checks the continuation condition after running its body.",
          "hint": "Think about whether the condition is checked first or last."
        },
        {
          "kind": "Apply",
          "q": "With choice 7 designated as Exit, which expression continues the menu loop?",
          "options": [
            "choice == 7",
            "choice != 7",
            "choice <= 0",
            "choice > 7"
          ],
          "answer": 1,
          "why": "Continue while the choice is not 7; choosing 7 stops the menu.",
          "hint": "The menu repeats until the Exit choice is selected."
        }
      ]
    },
    {
      "title": "Write clear methods",
      "subtitle": "Parameters and return values",
      "week": "Weeks 10–11",
      "clo": "CLO4",
      "icon": "",
      "time": "15–20 min",
      "learn": "A method carries out a named task. Parameters provide input and return values give a result back. Your project needs at least four meaningful methods in addition to main.",
      "why": "Small methods make the expense tracker easier to test, explain and divide fairly among 4–5 team members.",
      "code": "static double remainingBudget(double budget, double spent) {\n    return budget - spent;\n}",
      "build": "Design at least four meaningful method signatures, such as calculateTotal(double[],int) returning double; validAmount(double) returning boolean; searchByCategory(String[],int,String); and remainingBudget(double,double) returning double. Complete and call your own methods, without placing all logic in main.",
      "evidence": "For one method, show its call, explain what each parameter means, and predict its returned value. Record each team member’s programming responsibility.",
      "hint": "What does the method need? What should it return? Keep method names understandable.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "What is a parameter in a Java method?",
          "options": [
            "An input value accepted by a method",
            "An instruction to stop every loop",
            "A predefined category",
            "The number of array elements"
          ],
          "answer": 0,
          "why": "A parameter receives information from the caller, enabling a method to work with different inputs.",
          "hint": "Look at budget and spent in the example method."
        },
        {
          "kind": "Concept",
          "q": "Why are smaller meaningful methods helpful?",
          "options": [
            "They remove the need to test",
            "They make tasks easier to understand, reuse and explain",
            "They stop students from using arrays",
            "They require every method to print text"
          ],
          "answer": 1,
          "why": "Readable methods divide responsibilities and simplify testing and code walkthroughs.",
          "hint": "Would one very long main method be easy to debug?"
        },
        {
          "kind": "Apply",
          "q": "Which signature returns total spending from a double array and an active record count?",
          "options": [
            "static void calculateTotal()",
            "static double calculateTotal(double[] amounts, int count)",
            "static String calculateTotal()",
            "static boolean calculateTotal(String name)"
          ],
          "answer": 1,
          "why": "Total spending can be a decimal, so a double return type is appropriate; the inputs are the amounts array and its active count.",
          "hint": "A method calculating spending needs the recorded amounts and how many entries are active."
        }
      ]
    },
    {
      "title": "Store up to ten expenses",
      "subtitle": "Related 1D arrays",
      "week": "Weeks 12–13",
      "clo": "CLO5",
      "icon": "",
      "time": "15–20 min",
      "learn": "Use three parallel one-dimensional arrays: description, category and amount. One index identifies one expense. A count variable tracks the active records; each new expense receives record number count + 1.",
      "why": "Parallel arrays provide fixed storage with no advanced collection types. The limit of 10 expenses is a core requirement, not an optional rule.",
      "code": "String[] descriptions = new String[10];\nString[] categories = new String[10];\ndouble[] amounts = new double[10];\nint count = 0; // next empty index",
      "build": "Create the three arrays and a counter. Read a description, one of four categories and a positive amount; store all at index count and increment count only after successful validation. Reject the eleventh expense.",
      "evidence": "Add three fictional expenses. Explain why record 3 is stored at index 2. Fill to 10 and verify that the eleventh addition is rejected.",
      "hint": "Do not update count before validating. Record number = array index + 1.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "What are parallel 1D arrays?",
          "options": [
            "Arrays that keep related values at matching indexes",
            "Arrays that are always sorted",
            "Arrays that store just one value",
            "Arrays used only for loops"
          ],
          "answer": 0,
          "why": "At index i, the description, category and amount arrays all describe the same expense.",
          "hint": "Which index holds the category of the amount at index 2?"
        },
        {
          "kind": "Concept",
          "q": "What does count represent?",
          "options": [
            "The budget amount",
            "The number of currently stored expense records",
            "The total across categories",
            "The last amount entered"
          ],
          "answer": 1,
          "why": "count tracks records stored, while each array has a fixed capacity of 10.",
          "hint": "You can have ten available slots but only two expenses."
        },
        {
          "kind": "Apply",
          "q": "If count = 3, where should the fourth valid expense be stored?",
          "options": [
            "Array index 4",
            "Array index 10",
            "Array index 3",
            "Array index 0"
          ],
          "answer": 2,
          "why": "Java indexes are zero-based, so the fourth expense goes at index 3 and uses record number 4.",
          "hint": "The first expense is at index 0."
        }
      ]
    },
    {
      "title": "Search, update and summarize",
      "subtitle": "Operations and category totals",
      "week": "Weeks 12–14",
      "clo": "CLO1 · CLO4 · CLO5",
      "icon": "",
      "time": "20–25 min",
      "learn": "Search by category using a loop through the active records; update the amount by a valid record number; calculate total spending, remaining budget and totals for each category.",
      "why": "These features show whether the program can manage real changes without losing track of related fields. Overspending must trigger a warning; an empty tracker must still work.",
      "code": "double total = 0;\nfor (int i = 0; i < count; i++) {\n    total += amounts[i];\n}\ndouble remaining = budget - total;",
      "build": "Implement Display all (with record numbers), Search by category, Update an existing amount, and Budget summary. Show all four category totals. Reject invalid record numbers and updated amounts. Warn if total spending exceeds the budget.",
      "evidence": "Demonstrate one search, one update that changes totals, an unknown record number, an empty summary, and a warning when spending exceeds budget.",
      "hint": "To update record number r, validate 1 <= r <= count and then use index r - 1. Recalculate sums after the update.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "Why is a loop useful for computing Food expenses?",
          "options": [
            "It checks every active expense and adds only Food amounts",
            "It increases each amount",
            "It automatically changes categories",
            "It generates a new budget"
          ],
          "answer": 0,
          "why": "Check all active records; when a category matches Food, add its amount to the Food subtotal.",
          "hint": "You need to examine each record to decide which group it belongs to."
        },
        {
          "kind": "Concept",
          "q": "What should happen when spending exceeds the budget?",
          "options": [
            "Erase all expenses",
            "Reject every expense, even valid ones",
            "Show an overspending warning and the remaining budget",
            "Set all category totals to zero"
          ],
          "answer": 2,
          "why": "The brief explicitly asks to warn when spending exceeds the budget.",
          "hint": "Does the requirement say warn or automatically prevent spending?"
        },
        {
          "kind": "Apply",
          "q": "There are 3 expenses. Which array index represents record number 2 when updating it?",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": 1,
          "why": "Record numbers are 1-based for users, while Java array indexes are 0-based; index = recordNumber - 1.",
          "hint": "Subtract one from the displayed record number."
        }
      ]
    },
    {
      "title": "Test and explain your work",
      "subtitle": "Testing and showcase",
      "week": "Weeks 14–15",
      "clo": "CLO4 · CLO7",
      "icon": "",
      "time": "20–30 min",
      "learn": "A good test checks expected versus actual results. Include normal, invalid and boundary cases. At the showcase each student must explain code they wrote and trace or modify something in NetBeans.",
      "why": "A plausible output is not enough; changing one expense should recompute totals, and invalid inputs must not change stored records.",
      "code": "// Testing note (not part of the submitted solution):\n// Budget = 100; one expense = 30\n// Expected remaining = 70\n// Actual remaining = ______\n// Result = Pass / Fail",
      "build": "Run and document at least six test cases from the Testing tab; include budget 100/expense 30, invalid categories and amounts, update, budget threshold, unknown record, full capacity. Prepare the NetBeans folder, 2–3 page report, ~3-minute team demonstration and ~2-minute individual code walkthrough.",
      "evidence": "Record actual outcomes for at least six passing tests, including normal, invalid and boundary types. Show your own method and explain a small modification.",
      "hint": "Run the program in NetBeans and record real results. Test just below, at and above important limits.",
      "quiz": [
        {
          "kind": "Concept",
          "q": "What is a boundary test?",
          "options": [
            "Testing at or near a rule limit, such as capacity 10",
            "Testing only a made-up description",
            "Checking the website color",
            "Testing only the Exit button"
          ],
          "answer": 0,
          "why": "An 11th attempt and a zero amount exercise boundaries.",
          "hint": "Think of the smallest and largest allowed values."
        },
        {
          "kind": "Concept",
          "q": "Why retest the total after updating an expense?",
          "options": [
            "Because changing one record must change summaries that depend on it",
            "Because the category must change automatically",
            "To increase the array capacity",
            "To avoid displaying results"
          ],
          "answer": 0,
          "why": "Tests after updates reveal stale totals and indexing mistakes.",
          "hint": "The report depends on each stored amount."
        },
        {
          "kind": "Apply",
          "q": "Budget 100, an expense amount changes from 30 to 45. What should the new remaining budget be if this is the only expense?",
          "options": [
            "70",
            "145",
            "55",
            "-45"
          ],
          "answer": 2,
          "why": "100 - 45 = 55; updating a record must cause totals and remaining budget to be recalculated.",
          "hint": "Use the updated amount, not the old amount."
        }
      ]
    }
  ]
};

