import { useState } from "react";
import { Gifs } from "./gifs/components/Gifs";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { HeaderComponent } from "./shared/components/HeaderComponent";
import { SearchComponent } from "./shared/components/SearchComponen";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/models/gif.interface";
import { mockGifs } from "./gifs/models/gifs.mock";

const gifs: Gif[] = mockGifs;

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClick = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string) => {
    if (query === "") return;
    query = query.trim().toLowerCase();

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 7));

    const gifs = await getGifsByQuery(query);
    console.log(gifs);
  };

  return (
    <>
      {/* heaer*/}
      <HeaderComponent
        title="Buscador de Gifs"
        subTitle="Descubre y comparte el gif perfecto"
      />

      {/* search */}
      <SearchComponent
        onQuery={handleSearch}
        placeholder="Busca lo que quieras"
      />

      {/* busquedas previas */}
      <PreviousSearches
        onLabelClicked={handleTermClick}
        previousTerms={previousTerms}
      />

      {/* gifs */}
      <Gifs gifs={gifs} />
    </>
  );
};
