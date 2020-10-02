import * as React from "react"
import { connect } from "react-redux";
import { clickedAddButton } from "../actions/MotorcycleActions";

class NewItemButton extends React.Component {
  render() {
    return (
      <button className="btn btn-info mt-3" onClick={this.props.button_clicked}>Dodaj nowy</button>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    button_clicked: () => dispatch(clickedAddButton())
  };
};

export default connect(null, mapDispatchToProps)(NewItemButton)
