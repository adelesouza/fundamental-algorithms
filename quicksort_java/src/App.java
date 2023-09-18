import java.util.ArrayList;

public class App {
    public static void main(String[] args) {
        ArrayList arrayToOrdenate = new ArrayList();

        arrayToOrdenate.add(2);
        arrayToOrdenate.add(6);
        arrayToOrdenate.add(9);
        arrayToOrdenate.add(7);
        arrayToOrdenate.add(5);
        arrayToOrdenate.add(4);
        arrayToOrdenate.add(3);
        arrayToOrdenate.add(1);
        arrayToOrdenate.add(8);

        System.out.println(quickSort(arrayToOrdenate));
    }

    public static ArrayList quickSort(ArrayList arrayToOrdenate) {
        if (arrayToOrdenate.size() <= 1) {
            return arrayToOrdenate;
        }

        int pivot = (int) arrayToOrdenate.get(0);
        ArrayList leftArray = new ArrayList<>();
        ArrayList rightArray = new ArrayList<>();

        for (int i=0 ; i < arrayToOrdenate.size(); i++) {
            if ((int)arrayToOrdenate.get(i) < pivot) {
                leftArray.add(arrayToOrdenate.get(i));
            } if ((int)arrayToOrdenate.get(i) > pivot) {
                rightArray.add(arrayToOrdenate.get(i));
            }
        }

        ArrayList<Integer> sortedLeft = quickSort(leftArray);
        ArrayList<Integer> sortedRight = quickSort(rightArray);

        sortedLeft.add(pivot);
        sortedLeft.addAll(sortedRight);

        return sortedLeft;
    }
}