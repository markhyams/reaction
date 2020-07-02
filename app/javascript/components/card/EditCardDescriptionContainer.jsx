import { connect } from 'react-redux';
import * as actions from '../../actions/CardActions';

import EditCardDescription from './EditCardDescription';

const mapDispatchToProps = dispatch => {
  return {
    onUpdateDescription: (updatedCard, id, callback) => {
      dispatch(actions.updateCard(updatedCard, id, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(EditCardDescription);
