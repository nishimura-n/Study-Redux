//reducer => アクションと前の状態を組み合わせて新しい状態に更新する．
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMNT":
      return state + 1;
    case "DEREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
