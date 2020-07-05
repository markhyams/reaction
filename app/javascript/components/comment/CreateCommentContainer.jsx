import { connect } from 'react-redux';
import CreateComment from './CreateComment.jsx';
import * as actions from '../../actions/CommentActions';

const mapDispatchToProps = dispatch => {
  return {
    createComment: (newComment, callback) => {
      dispatch(actions.createComment(newComment, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateComment);
