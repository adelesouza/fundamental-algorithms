public class App {
  public static void main(String[] args) throws Exception {
    int a = 45;
    int b = 27;
    int mdc = 1;

    int theGreatestNumber = 0;

    if (a > b) {
      theGreatestNumber = a;
    } if (a < b) {
      theGreatestNumber = b;
    }

    for (int i = theGreatestNumber; i > 0; i--) {
      if ((a % i == 0) && (b%i == 0)) {
          mdc = i;
          break;
      }
    }  

    System.out.println("MDC is " + mdc);
  }
}
