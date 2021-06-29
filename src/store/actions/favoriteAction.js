export const CHECK_FAVORITE = "CHECK_FAVORITE";

export function checkFavorite(favorite) {
  return {
    type: CHECK_FAVORITE,
    payload: favorite,
  };
}
