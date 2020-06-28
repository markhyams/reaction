import { connect } from 'react-redux';
import List from './List.jsx';
import * as actions from '../../actions/ListActions';

const mapDispatchToProps = dispatch => {
  return {
    onUpdateTitle: (updatedList, id, cb) => {
      dispatch(actions.updateList(updatedList, id, cb));
    },
  };
};

export default connect(null, mapDispatchToProps)(List);
