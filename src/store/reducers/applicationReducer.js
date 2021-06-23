import { applicationItems } from "../initalValues/applicationItems";
import { APPLICATION_CHECK } from "../actions/applicationAction";
const initState = { applicationItems: applicationItems };

export default function applicationReducer(
  state = initState,
  { type, payload }
) {
  switch (type) {
    case APPLICATION_CHECK:
      let applications = state.applicationItems.find(
        (a) => a.applicationItems === payload.id
      );

      if (applications) {
        return {
          ...state,
          applicationItems: [{application: true}],
        };
      } else {
        return {
          ...state,
          applicationItems: [{application: false}],
        };
      }

    default:
      return state;
  }
}
