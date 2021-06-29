import { favoriteItems } from "../initalValues/favoriteItems";
import { CHECK_FAVORITE } from "../actions/favoriteAction";

const initalState = { favoriteItems: favoriteItems };

export default function favoriteReducer(
  state = initalState,
  { type, payload }
) {
  switch (type) {
    case CHECK_FAVORITE:
      return {
        ...state,
        favoriteItems: payload,
      };

    default:
      return state;
  }
}
