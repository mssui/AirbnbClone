const initState = {
  likes: [
    { id: "1", person: "Aslı", likecount: 29 },
    { id: "2", person: "David", likecount: 45 },
    { id: "3", person: "Chacha", likecount: 35 },
    { id: "4", person: "Turos", likecount: 52 }
  ]
};

const notifyReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER": {
      return Object.assign({}, state, {
        likes: state.likes.map(like => {
          if (like.id !== action.id) {
            return like;
          }
          return Object.assign({}, like, {
            likecount: like.likecount + 1
          });
        })
      });
    }

    default:
      return state;
  }
};

export default notifyReducer;
