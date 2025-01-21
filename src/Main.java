// Java Notes
public class Main {
    // Public Class = Name Of File
    // All objects are classes
    public static void main(String[] args) {
        // Primitive Variables: int, double,  char, boolean
        // Operators: < > <= >= == != && ||
        int num = 5;
        double y = 5.0;
        char letter = 'y';
        boolean condition = true;

        // String Class
        String line = "Introduction";
        String line2 = "This is me";
        // Concatentation
        String combined = line + line2;
        String combined2 = num + line;
        // Equality
        boolean stringEquals = line.equals(line2);

        // Array Declaration/Creation
        int[] array;
        array = new int[10];
        int[] array2 = new int[5];
        int[] array3 = {1, 2, 3};
        // Set/Access
        array[0] = 4;
        array[1] = array[0]+1;

        // Print Items
        int arrayLength = array.length;
        for (int i : array) {
            System.out.println(i);
        }
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

        // Conditional
        if (num > 5) {
            System.out.println("If Logic");
        } else if (y == 5) {
            System.out.println("Else If Logic");
        } else {
            System.out.println("Else Logic");
        }

        // Loop
        for (int i = 0; i < 10; i++) {
            System.out.println("Loop Logic");
            if (i % 2 == 0) {
                continue;
            } else if (i % 5 == 0) {
                break;
            }
            System.out.println(i);
        }

        // Switch
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                // break
                // Without break, fall-through occurs
                // Will continue executing logic (case 2) until 'break'
            case 2:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Other day");
        }

        // Ternary Operator = condition ? x else y
        int result = num == 5 ? 1 : 0;


    }
}