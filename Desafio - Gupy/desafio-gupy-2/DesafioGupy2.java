import java.util.Scanner;

public class DesafioGupy2 {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe um número: ");
        int number = scanner.nextInt();
        scanner.close();

        if (isFibonacci(number)) {
            System.out.println(number + " pertence à sequência de Fibonacci.");
        } else {
            System.out.println(number + " não pertence à sequência de Fibonacci.");
        }
    }

    private static boolean isFibonacci(int n) {
        int a = 0, b = 1;
        while (a < n) {
            int temp = a;
            a = b;
            b = temp + b;
        }
        return a == n;
    }
}