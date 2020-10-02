import * as React from "react";
import { connect } from "react-redux";
import EditableMotorcycleItem from "./EditableMotorcycleItem";
import MotorcycleItem from "./MotorcycleItem";
import MotorcycleNewItem from "./MotorcycleNewItem";
import NewItemButton from "./NewItemButton";

class MotorcyclesList extends React.Component {
  motorcycleToMotorcycleItem(motorcycle) {
    const { id, brand, production_year, after_car_accident, editing } = motorcycle

    if (editing) {
      return <EditableMotorcycleItem key = {id} id = {id} brand={brand} production_year={production_year} after_car_accident={after_car_accident} />;
    } else {
      return <MotorcycleItem key = {id} id = {id} brand={brand} production_year={production_year} after_car_accident={after_car_accident} />;
    }
  };

  render() {
    return (
      <div className='container mt-5'>
        <ul className="list-group">
          <li className="list-group-item bg-warning border border-white">
            <div className="d-inline-block w-25 p-2 text-center align-middle">Marka</div>
            <div className="d-inline-block w-25 p-2 text-center align-middle">Rok produkcji</div>
            <div className="d-inline-block w-25 p-2 text-center align-middle">Powypadkowy</div>
          </li>

          {this.props.motorcycles.map(this.motorcycleToMotorcycleItem)}

          {this.props.new_item_clicked ? <MotorcycleNewItem /> : ''}
        </ul>

        {this.props.new_item_clicked ? '' : <NewItemButton />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    motorcycles: state.motorcycles,
    new_item_clicked: state.new_item_clicked
  }
};

export default connect(mapStateToProps, null)(MotorcyclesList);
