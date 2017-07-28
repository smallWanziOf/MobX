import {connect} from 'react-redux';
import CPShowNum from '../components/CPShowNum';
import {MoreThanZero,AddNum,Clear} from '../action/Action';

const mapStateToProps = (state) => {
  return {
    "Store":state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter:(data)=>{dispatch(MoreThanZero(data))},
    handleAdd:()=>{dispatch(AddNum(parseInt(Math.random()*100-50)))},
    handleClear:(data)=>{dispatch(Clear(data))},
  }
}

const CTShowNum = connect(
  mapStateToProps,
  mapDispatchToProps
)(CPShowNum);

export default CTShowNum;
