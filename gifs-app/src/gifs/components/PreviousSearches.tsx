interface Props {
  previousTerms: string[];

  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ previousTerms, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {previousTerms.map((term) => (
          <li onClick={() => onLabelClicked(term)} key={term}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
