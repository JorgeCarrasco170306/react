import { useState } from "react";

export interface Props {
  name: string;
  quantity: number;
}

export const ItemCounter = ({ ...props }: Props) => {
  const [count, setCount] = useState(props.quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count === 0) return;

    setCount(count - 1);
  };

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: 150,
          color: count === 0 ? 'red' : 'black'
        }}
      >
        {props.name}
      </span>
      <button onClick={handleAdd}> +1 </button>
      <span> {count} </span>
      <button onClick={handleSubtract}> -1 </button>
    </section>
  );
};
