import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> numbersSet = new ArrayList<Integer>();
        numbersSet.add(1);
        numbersSet.add(2);
        numbersSet.add(3);
        numbersSet.add(4);
        numbersSet.add(5);
        numbersSet.add(6);
        numbersSet.add(7);

        int sum = 0;
        Integer number;

        for (int i = 0; i < numbersSet.size(); i++) {
            number = numbersSet.get(i);
            sum+=number;
        }

        System.out.println("The sum is: " + sum);
    }
}
