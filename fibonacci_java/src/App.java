import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> fibonacci = new ArrayList<Integer>();
        fibonacci.add(0);
        fibonacci.add(1);
        int N = 13;
        int nextNumber;
    
        for (int i = 2; i < N; i++) {
          nextNumber = fibonacci.get(i-1) + fibonacci.get(i-2);
          fibonacci.add(nextNumber);
        }
    
        System.out.println("The sequence of fibonnaci with " + N + " numbers is: " + fibonacci);
    }
}
