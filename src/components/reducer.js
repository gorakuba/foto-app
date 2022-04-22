export const initialState = {
  favorite: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.photo],
      };

    case "REMOVE_FROM_FAVORITE":
      let newFavorite = [...state.favorite];
      const index = state.favorite.findIndex(
        (favoriteItem) => favoriteItem.src === action.src
      );

      if (index >= 0) {
        newFavorite.splice(index, 1);
      } else {
        console.warn(
          `Can not remove it! Photo with source: ${action.src} is not in FAVORITE SECTION!`
        );
      }

      return {
        ...state,
        favorite: newFavorite,
      };

    default:
      return state;
  }
};

export default reducer;
