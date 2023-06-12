import { useContext, useState } from "react";
import { genres } from "../utils";
import { MovieContext } from "../App";
const ButtonFilters = () => {
  const [tabActive, setTabActive] = useState(0);
  const { popularMovies, setFilteredMovie } = useContext(MovieContext);

  const handleClickFilter = (id) => {
    setTabActive(id);
    const filteredMovie = popularMovies.filter((movie) =>
      movie.genre_ids.includes(id)
    );
    if (id === 0) {
      setFilteredMovie(popularMovies);
    } else {
      setFilteredMovie(filteredMovie);
    }
  };

  return (
    <div className="button-wrapper">
      {genres.map((item) => (
        <button
          className={tabActive === item.id ? "active" : ""}
          onClick={() => handleClickFilter(item.id)}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilters;
