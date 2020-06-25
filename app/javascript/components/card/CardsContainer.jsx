import Cards from "./Cards.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.filter((card) => card.list_id === ownProps.listId),
  };
};

export default connect(mapStateToProps, null)(Cards);
