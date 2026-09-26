import { ItemCounter, type Props } from "./shopping-cart/ItemCounter";

const itemsInCart: Props[] = [
  { name: "The last of us 2", quantity: 1 },
  { name: "The last of us 1", quantity: 2 },
  { name: "Super smash bros 2", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras: </h1>

      {itemsInCart.map((item) => (
        <ItemCounter key={item.name}  {...item} />
      ))}
    </>
  );
}
