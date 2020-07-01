import { connect } from 'react-redux';
import CreateCard from './CreateCard.jsx';
import * as actions from '../../actions/CardActions';

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: (newCard, callback) => {
      dispatch(actions.createCard(newCard, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateCard);
