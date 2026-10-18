package cs101.expenses;

import java.util.Scanner;

/**
 * CS101 Showcase Project 3: Personal Expense Tracker.
 *
 * STUDENT STARTER — deliberately incomplete.
 * Follow learning/STEP-01 through STEP-07 to complete the TODO methods.
 * Use fictional expense records only.
 */
public class PersonalExpenseTracker {

    private static final int CAPACITY = 10;

    // Parallel 1D arrays: record i is stored at index i in every array.
    private static final String[] descriptions = new String[CAPACITY];
    private static final String[] categories = new String[CAPACITY];
    private static final double[] amounts = new double[CAPACITY];

    private static int count = 0;
    private static double budget = 0;

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("CS101 Project 3 — Personal Expense Tracker");
        System.out.println("Use fictional expense descriptions only.");

        // Stage 1: This is one working feature; complete the other features yourself.
        budget = readPositiveBudget(input, budget);

        int choice;
        do {
            printMenu();
            System.out.print("Choose an option: ");

            if (!input.hasNextInt()) {
                System.out.println("Invalid menu choice. Enter a number from 1 to 7.");
                input.nextLine();
                choice = 0;
                continue;
            }

            choice = input.nextInt();
            input.nextLine(); // Clear newline so nextLine can read descriptions.

            switch (choice) {
                case 1:
                    budget = readPositiveBudget(input, budget);
                    break;
                case 2:
                    count = addExpense(input, descriptions, categories, amounts, count);
                    break;
                case 3:
                    displayExpenses(descriptions, categories, amounts, count);
                    break;
                case 4:
                    searchByCategory(input, descriptions, categories, amounts, count);
                    break;
                case 5:
                    updateExpense(input, amounts, count);
                    break;
                case 6:
                    displayBudgetSummary(budget, categories, amounts, count);
                    break;
                case 7:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Invalid menu choice. Choose 1 to 7.");
                    break;
            }
        } while (choice != 7);
        input.close();
    }

    private static void printMenu() {
        System.out.println();
        System.out.println("===== EXPENSE TRACKER MENU =====");
        System.out.println("1. Set budget");
        System.out.println("2. Add expense");
        System.out.println("3. Display expenses");
        System.out.println("4. Search by category");
        System.out.println("5. Update expense amount");
        System.out.println("6. Budget and category summary");
        System.out.println("7. Exit");
    }

    /**
     * Stage 1: working example. A rejected value does not overwrite the budget.
     */
    private static double readPositiveBudget(Scanner input, double oldBudget) {
        System.out.print("Enter a positive budget: ");
        if (!input.hasNextDouble()) {
            System.out.println("Invalid budget. Enter a number.");
            input.nextLine();
            return oldBudget;
        }
        double proposed = input.nextDouble();
        input.nextLine();
        if (proposed <= 0 || !Double.isFinite(proposed)) {
            System.out.println("Invalid budget. It must be positive.");
            return oldBudget;
        }
        System.out.printf("Budget set to SAR %.2f%n", proposed);
        return proposed;
    }

    /**
     * Stages 2 and 5: validate and save an expense in the three parallel arrays.
     * Return the new active record count ONLY after successful insertion.
     */
    private static int addExpense(Scanner input, String[] descriptions,
                                  String[] categories, double[] amounts, int count) {
        // TODO: Reject the 11th expense; input a nonblank description.
        // TODO: Accept only Food, Transport, Study, or Other.
        // TODO: Accept only a positive amount. Do not change arrays on invalid input.
        // TODO: Save all three values at the same array index and return count + 1.
        System.out.println("Not implemented yet — follow Step 5.");
        return count;
    }

    /** Stage 6: display each stored record as record number i + 1. */
    private static void displayExpenses(String[] descriptions,
                                        String[] categories, double[] amounts, int count) {
        // TODO: Use a loop over only active records, not the full array capacity.
        System.out.println("Not implemented yet — follow Step 6.");
    }

    /** Stage 6: find all expenses belonging to a chosen fixed category. */
    private static void searchByCategory(Scanner input, String[] descriptions,
                                         String[] categories, double[] amounts, int count) {
        // TODO: Validate the category choice; display all matching records.
        System.out.println("Not implemented yet — follow Step 6.");
    }

    /** Stage 6: update one existing record using record number - 1 as array index. */
    private static void updateExpense(Scanner input, double[] amounts, int count) {
        // TODO: Reject invalid record numbers and non-positive replacement amounts.
        System.out.println("Not implemented yet — follow Step 6.");
    }

    /** Stage 4: return the sum of the first count amounts. */
    private static double calculateTotal(double[] amounts, int count) {
        // TODO: Replace this temporary return with a loop to calculate the total.
        return 0;
    }

    /** Stage 6: total, remaining, each category total, and overspending warning. */
    private static void displayBudgetSummary(double budget, String[] categories,
                                             double[] amounts, int count) {
        // TODO: Use calculateTotal(amounts, count); handle an empty tracker.
        // TODO: Show Food, Transport, Study and Other totals.
        // TODO: Warn when spending exceeds budget; a negative balance is valid.
        System.out.println("Not implemented yet — follow Step 6.");
    }
}
