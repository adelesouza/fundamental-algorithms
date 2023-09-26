public class App {
    public static void main(String[] args) throws Exception {
        int N = 15;
        Boolean nIsPrime = null;

        for(int i=1; i<=N; i++) {
            if (N%i == 0) {
                if (i == 1 || i == N) {
                    nIsPrime = true;
                } else {
                    nIsPrime = false;
                    break;
                } 
            } else {
                nIsPrime = false;
            }
        }

        System.out.println("Is N prime? " + nIsPrime);
    }
}
