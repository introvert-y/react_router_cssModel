
const reducer = (state = { count: 0, name: 'Ming' }, action) => {
  return {
    ...state,
    count: caculateNum(state.count, action),
  }
};

function caculateNum( count = 0, action) {
  switch (action.type) {
    case 'increase':
      return count + action.count;
    case 'decrease':
      return count - action.count;
    default:
      return count;
  }
}
export default reducer;
