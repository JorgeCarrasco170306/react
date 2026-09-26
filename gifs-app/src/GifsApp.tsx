import { Gifs } from "./gifs/components/Gifs";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs, type Gif } from "./gifs/models/gifs.mock";
import { HeaderComponent } from "./shared/components/HeaderComponent";
import { SearchComponent } from "./shared/components/SearchComponen";

const gifs: Gif[] = mockGifs;

export const GifsApp = () => {
  return (
    <>
      {/* heaer*/}
      <HeaderComponent
        title="Buscador de Gifs"
        subTitle="Descubre y comparte el gif perfecto"
      />

      {/* search */}
      <SearchComponent placeholder="Busca lo que quieras" />

      {/* busquedas previas */}
      <PreviousSearches />

      {/* gifs */}
      <Gifs gifs={gifs} />
    </>
  );
};
