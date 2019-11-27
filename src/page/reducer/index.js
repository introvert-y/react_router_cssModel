function caculateNum(count = 0, action) {
  switch (action.type) {
    case "increase":
      return count + action.count;
    case "decrease":
      return count - action.count;
    default:
      return count;
  }
}

function caculateName(name, action) {
  switch (action.type) {
    case "setName":
      return action.name;
    default:
      return name;
  }
}

const reducer = (state = { count: 0, name: "Ming" }, action) => ({
  ...state,
  count: caculateNum(state.count, action),
  name: caculateName(state.name, action)
});

export default reducer;
