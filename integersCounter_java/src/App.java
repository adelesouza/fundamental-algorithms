import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Number> values = new ArrayList<Number>();

        values.add(56);
        values.add(1.5);
        values.add(2);
        values.add(998.887);
        values.add(13);
        values.add(47.8);
        values.add(39);

        int N = values.size();
        int counter = 0;

        for (int i = 0; i < N; i++) {
          String type = values.get(i).getClass().getTypeName();

          if (type.equals("java.lang.Integer")) {
            counter++;
          }
        }

      System.out.println("In this number set exists "+ counter + " integers numbers.");
      
    }
}