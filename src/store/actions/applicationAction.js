export const APPLICATION_CHECK = "APPLICATION_CHECK";

export function checkApplication(application) {
  return {
    type: APPLICATION_CHECK,
    payload: application,
  };
}
