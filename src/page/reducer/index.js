function caculateNum(count = 0, action) {
  switch (action.type) {
    case 'increase':
      return count + action.count;
    case 'decrease':
      return count - action.count;
    default:
      return count;
  }
}

const reducer = (state = { count: 0, phone: '', name: 'Ming' }, action) => ({
  ...state,
  count: caculateNum(state.count, action),
  phone: action.phone,
});


export default reducer;
