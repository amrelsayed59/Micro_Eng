const Main: React.FC<any> = (state, action) => {
  switch (action.type) {
    case "setMovie":
      state.ListMovie.push({ ...action.payload });
      return { ...state };
    case "restMovie":
      state.ListMovie = [];
      return { ...state };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default Main;
