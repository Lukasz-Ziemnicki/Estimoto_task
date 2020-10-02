import * as React from "react"
import { connect } from "react-redux";
import { abandonSave, submitStart } from "../actions/MotorcycleActions";

class MotorcycleNewItem extends React.Component {
  render() {
    return (
      <li className="list-group-item bg-info border border-white text-light mt-4">
        <form onSubmit={() => this.props.save_item(event)}>
          <div className="d-inline-block w-25 p-2 text-center align-middle">
            <input className="form-control" type='text' name='motorcycle[brand]'/>
          </div>
          <div className="d-inline-block w-25 p-2 text-center align-middle">
            <input className="form-control" type='text' name='motorcycle[production_year]'/>
          </div>
          <div className="d-inline-block w-25 p-2 text-center align-middle">
            <input className="form-control" type='text' name='motorcycle[after_car_accident]'/>
          </div>

          <div className="d-inline-block w-25 p-2 text-right align-middle">
            <button className="d-inline-block btn btn-secondary mr-1">Zapisz</button>
            <button className="d-inline-block btn btn-danger" onClick={this.props.abandon_clicked}>Anuluj</button>
          </div>
        </form>
      </li>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    abandon_clicked: () => dispatch(abandonSave()),
    save_item: event => dispatch(submitStart(event))
  };
};

export default connect(null, mapDispatchToProps)(MotorcycleNewItem)
