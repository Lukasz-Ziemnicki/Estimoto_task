import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/MotorcycleActions";

class EditableMotorcycleItem extends React.Component {
  render() {
    const { id, brand, production_year, after_car_accident } = this.props;

    return (
      <li className="list-group-item bg-info border border-white text-light">
        <form onSubmit={() => this.props.updateMotorcycle(event, id)}>
          <div className="d-inline-block w-25 p-2 text-center align-middle">
            <input className="form-control" type='text' name='motorcycle[brand]' defaultValue={brand}/>
          </div>
          <div className="d-inline-block w-25 p-2 text-center align-middle">
            <input className="form-control" type='text' name='motorcycle[production_year]' defaultValue={production_year}/>
          </div>
          <div className="d-inline-block w-25 p-2 text-center align-middle">
            <input className="form-control" type='text' name='motorcycle[after_car_accident]' defaultValue={after_car_accident}/>
          </div>
          <div className="d-inline-block w-25 p-2 text-right align-middle">
            <button className="d-inline-block btn btn-secondary mr-1" type='submit'>Zapisz</button>
            <button className="d-inline-block btn btn-danger" onClick={() => this.props.cancelEditing(this.props.id)}>Anuluj</button>
          </div>
        </form>
      </li>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateMotorcycle: (event, id) => dispatch(actions.updateMotorcycleRequest(event, id)),
    cancelEditing: id => dispatch(actions.editCancel(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditableMotorcycleItem);
