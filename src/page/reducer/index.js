import req from '../../req';
const reducer = (state = { count: 0, phone: '', name: 'Ming' }, action) => {
  return {
    ...state,
    count: caculateNum(state.count, action),
    phone: action.phone,
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
function caculatePhone( phone = '', action) {
  switch (action.type) {
    case 'changeMessageCount':
    case 'receiveCount':
      return action.phone;
    default:
      return phone;
  }
}

export default reducer;
