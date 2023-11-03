//reducer => アクションと前の状態を組み合わせて新しい状態に更新する．
const isLogginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLogginReducer;
