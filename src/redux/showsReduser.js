import * as actionTypes from "./showsActionTypes";

const initState = {
  loading: false,
  successMessage: null,
  error: null,
  shows: [],
  genres: [],
  show: null,
};

const showsReduser = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
        // show: null,
      };
    }
    case actionTypes.FAILURE: {
      return {
        ...state,
        loading: false,
        error: "Somthing wrong",
      };
    }

    case actionTypes.GET_SHOWS_SUCCESS: {
      let genresArr = [];

      const getGenresArr = action.payload.map((item) => item.show.genres);
      for (let value of getGenresArr) {
        genresArr.push(...value);
      }
      genresArr = [...new Set(genresArr)];

      const sortedGenresArrWithScorr = action.payload.sort(
        (a, b) => a.score < b.score
      );

      let genres = [];
      for (let i of genresArr.sort()) {
        genres.push({ name: i, collapsed: "hide" });
      }

      action.payload.map((item) => (item.star = false));

      return {
        ...state,
        loading: false,
        successMessage: null,
        error: null,
        shows: sortedGenresArrWithScorr,
        genres: genres,
      };
    }

    case actionTypes.COLLAPSE: {
      let collapsedGenres = [...state.genres];
      if (collapsedGenres.length >= 1) {
        let genresIndex = collapsedGenres.findIndex(
          (item) => item.name === action.payload.type
        );
        if (collapsedGenres.length > 0 && genresIndex >= 0) {
          collapsedGenres[genresIndex].collapsed =
            action.payload.toggleCollapse;
        }
      }

      return {
        ...state,
        genres: collapsedGenres,
        loading: false,
      };
    }

    case actionTypes.STAR_CHANGER: {
      const newShows = [...state.shows];

      if (newShows.length > 0) {
        let showIndex = newShows.findIndex(
          (item) => item.show.name === action.payload
        );
        newShows[showIndex].star = !newShows[showIndex].star;
      }

      return {
        ...state,
        shows: newShows,
        loading: false,
      };
    }

    case actionTypes.DELETE_SHOW_SUCCESS: {
      const newShows = [...state.shows];

      let filteredShows = newShows.filter(
        (show) => show.show.id !== action.payload
      );

      return {
        ...state,
        shows: filteredShows,
        loading: false,
      };
    }

    case actionTypes.GET_SHOW_SUCCESS: {
      return {
        ...state,
        show: action.payload,
        loading: false,
      };
    }

    case actionTypes.DELETE_SHOWS_SUCCESS: {
      const newShows = state.shows.filter((item) => {
        return item.show.name !== action.payload;
      });

      const newGenres = state.genres.filter((item) => {
        return item.name !== action.payload;
      });

      return {
        ...state,
        shows: newShows,
        loading: false,
        genres: newGenres,
      };
    }

    default:
      return state;
  }
};

export default showsReduser;
