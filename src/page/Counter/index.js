import { connect } from 'react-redux';
import Counter from './UI/index';

const mapStateToProps = (state, ownProps) => {
  // console.log('mapStateToProps', state.count,ownProps);
  return {
    value: state.count
  }
}
 
const mapDispatchToProps = {
  onIncreaseClick: () => {
    return {
      type: 'increase'
    }
  },
  onDecreaseClick: () => {
    return {
      type: 'decrease'
    }
  },
}

// 容器组件
// const VisibleCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);