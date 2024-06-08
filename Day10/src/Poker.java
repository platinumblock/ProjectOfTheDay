import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
public class Poker {
	
	public static void main(String[] args) {
		ArrayList<Card> deck=new ArrayList<>();
		String[] suits= {"Hearts","Diamonds","Spades","Clubs"};
		for(int i=0;i<4;i++) {
			for(int k=2;k<15;k++) {
				String name=String.valueOf(k);
				if(k==11) name="Jack";
				if(k==12) name="Queen";
				if(k==13) name="King";
				if(k==14) name="Ace";
				deck.add(new Card(k,name,suits[i]));
			}
		}
		Random r=new Random();
		for(int i=0;i<deck.size();i++) {
			int swap=r.nextInt(deck.size());
			Card temp=deck.get(i);
			deck.set(i, deck.get(swap));
			deck.set(swap, temp);
		}
		Scanner s=new Scanner(System.in);
		
		
	}

}
class Card{
	public int value;
	public String name;
	public String type;
	public Card(int value,String name,String type) {
		this.value=value;
		this.name=name;
		this.type=type;
	}
	public String toString() {
		return name+" of "+type;
	}
}