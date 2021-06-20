import { LOGIN_USER, LOGOUT_USER } from "../actions/userAction";
import { userItem } from "../initalValues/userItems";

const initState = { userItem: userItem };

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        userItem: [...state.userItem, { user: payload }],
      };

    case LOGOUT_USER:
      return {
        ...state,
        userItem: state.userItem.filter((u) => u.user.id === payload.id),
      };

    default:
      return state;
  }
}
