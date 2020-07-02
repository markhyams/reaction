import { connect } from 'react-redux';
import * as actions from '../../actions/CardActions';
import EditCardTitle from './EditCardTitle';

const mapDispatchToProps = dispatch => {
  return {
    onUpdateTitle: (updatedCard, id) => {
      dispatch(actions.updateCard(updatedCard, id));
    },
  };
};

export default connect(null, mapDispatchToProps)(EditCardTitle);
