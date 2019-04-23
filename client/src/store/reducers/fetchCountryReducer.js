const initState = {
  posts_bycountry: [],
  countryLoading: true
};

const fetchCountryReducer = (state = initState, action) => {
  switch (action.type) {
    case "COUNTRY_POSTS_LOADING":
      return {
        ...state,
        countryLoading: true
      };
    case "GET_COUNTRY":
      return {
        ...state,
        posts_bycountry: action.payload,
        countryLoading: false
      };
    default:
      return state;
  }
};

export default fetchCountryReducer;
