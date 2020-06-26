import { connect } from "react-redux";
import CreateList from "./CreateList";
import * as actions from "../../actions/ListActions";

const mapDispatchToProps = (dispatch) => {
  return {
    onAddList: (newList, callback) => {
      dispatch(actions.createList(newList, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateList);
