# Student test plan — Project 3

The **first six types of tests** below directly reflect the official Project 3 guide, expanded into **nine concrete test scenarios** for practice. Write down **actual outputs from your running Java program**; do not mark a test as passed without running it.

| Test | Type | Procedure | Expected behavior | Actual result | Pass / Fail |
|---|---|---|---|---|---|
| 1. Budget and one expense | Normal | Set budget 100; add Food amount 30 | Total spending = 30; remaining budget = 70 | ________ | ________ |
| 2. Zero and negative budget | Invalid | Set starting budget 0, then -10 | Both rejected; budget must be positive | ________ | ________ |
| 3. Zero and negative expense | Invalid | Try expense 0, then -4 | Both rejected; expense count and totals unchanged | ________ | ________ |
| 4. Wrong category | Invalid | Try category Sports (not in the list) | Reject category; no record added | ________ | ________ |
| 5. Update an existing expense | Normal | Budget 100; expense record 1 = 30, then update to 45 | Total changes to 45; remaining budget changes to 55 | ________ | ________ |
| 6. At and above the budget | Boundary | Budget 100; total spending = 100; then increase to 101 | At 100: remaining 0. At 101: remaining -1 and overspending warning | ________ | ________ |
| 7. Unknown record number | Invalid | With 2 records, try updating record 0 and record 3 | Reject both; original amounts unchanged | ________ | ________ |
| 8. Capacity limit | Boundary | Add 10 valid expenses; attempt an 11th | Reject 11th; count stays 10 | ________ | ________ |
| 9. Empty expense summary | Boundary | Budget 100; display summary before adding expenses | Total spending 0; remaining budget 100; category totals 0 | ________ | ________ |

## Suggested test procedure

1. Compile and run your own implementation in **NetBeans**.
2. Follow the test input instructions exactly.
3. Record the actual result and compare it with the expected behavior.
4. If the test fails, note the correction you made and rerun it.
5. Attach test screenshots or a neat table in your final 2–3 page report.

**Minimum official requirement:** At least **six documented tests** covering normal, invalid and boundary situations.
