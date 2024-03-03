import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function MovieDetail() {
  const params = useParams();
  // I dont see a reason to have a special GET request for a specific movie when we already have movies loaded and it will reload every time the page is refreshed since I moved the fetch to the app component
  // I guess it makes sense to do to have updated info but in this case I thihk its ok not to do
  const movieDetail = useSelector((state) =>
    state.movies.find((m) => m.id === Number(params.id))
  );
  const history = useHistory();

  return (
    <div data-testid='movieDetails'>
      <button onClick={() => history.push("/")} data-testid='toList'>
        Back to movies..
      </button>
      <p>{movieDetail?.title}</p>
      <p>{movieDetail?.description}</p>
      <p>
        Genres:{" "}
        {movieDetail?.array_agg?.map((g) => (
          <span>{g} </span>
        ))}
      </p>
      <img src={movieDetail?.poster} />
    </div>
  );
}
