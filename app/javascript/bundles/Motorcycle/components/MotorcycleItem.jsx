import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/MotorcycleActions";

class MotorcycleItem extends React.Component {
  render() {
    const { id, brand, production_year, after_car_accident, editing } = this.props;

    return (
      <li className="list-group-item bg-info border border-white text-light">
        <div className="d-inline-block w-25 p-2 text-center align-middle">{brand}</div>
        <div className="d-inline-block w-25 p-2 text-center align-middle">{production_year}</div>
        <div className="d-inline-block w-25 p-2 text-center align-middle">{after_car_accident}</div>
        <div className="d-inline-block w-25 p-2 text-right align-middle">
          <button className="d-inline-block btn btn-secondary mr-1" onClick={() => this.props.editItem(this.props.id)}>Edytuj</button>
          <button className="d-inline-block btn btn-danger" onClick={() => this.props.removeMotorcycle(this.props.id)}>Usuń</button>
        </div>
      </li>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeMotorcycle: id => dispatch(actions.deleteMotorcycleRequest(id)),
    editItem: id => dispatch(actions.editItem(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MotorcycleItem);
