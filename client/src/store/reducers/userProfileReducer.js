const initState = {
  user_posts: [],
  user_posts_loading: true,
  user_books: [],
  user_books_loading: true,
  user_favs: [],
  user_favs_loading: true
};

const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_POSTS_LOADING":
      return {
        ...state,
        user_posts_loading: true
      };
    case "GET_USER_POSTS":
      return {
        ...state,
        user_posts: action.payload,
        user_posts_loading: false
      };
    case "USER_BOOKINGS_LOADING":
      return {
        ...state,
        user_books_loading: true
      };
    case "GET_USER_BOOKINGS":
      return {
        ...state,
        user_books: action.payload,
        user_books_loading: false
      };
    case "USER_FAVS_LOADING":
      return {
        ...state,
        user_favs_loading: true
      };
    case "GET_USER_FAVS":
      return {
        ...state,
        user_favs: action.payload,
        user_favs_loading: false
      };

    default:
      return state;
  }
};

export default userProfileReducer;
