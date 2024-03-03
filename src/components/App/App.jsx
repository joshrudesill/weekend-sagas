import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import "./App.css";
import MovieDetail from "../MovieDetail/MovieDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <div className='App'>
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetail />
        </Route>

        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
