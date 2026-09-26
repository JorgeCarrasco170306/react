const name = "Jorge";
const lastname = "Carrasco";
const favoriteGames = [
  "Elden Ring",
  "God of war",
  "Mario Kart",
  "The last of us 2",
];

const addres = {
  zipCode: "ABC-123",
  country: "Dominican Repúblic",
};
export const MyAwesomeApp = () => {

  const isActive = false;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{lastname}</h3>

      <p>{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p>{JSON.stringify(addres)}</p>
    </div>
  );
};
