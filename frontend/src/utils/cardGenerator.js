export default function cardGenerator() {
  const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}