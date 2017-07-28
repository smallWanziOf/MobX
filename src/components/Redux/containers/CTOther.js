import {connect} from 'react-redux';
import CPOther from '../components/CPOther';

const mapStateToProps = (state) => {
  return {
    "Store":state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const CTOther = connect(
  mapStateToProps,
  mapDispatchToProps
)(CPOther);

export default CTOther;