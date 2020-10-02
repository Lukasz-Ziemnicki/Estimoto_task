import * as actions from '../constants/MotorcycleConstants';

const initialState = {
  new_item_clicked: false,
  motorcycles: []
}

export default function motorcycleReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MOTORCYCLE:
      let id = 0;

      for (let motorcycle of state.motorcycles) {
        if(motorcycle.id > id) {
          id = motorcycle.id
        }
      }

      return {
        ...state,
        new_item_clicked: action.payload.new_item_clicked,
        motorcycles: [
          ...state.motorcycles,
          {
            id: id + 1,
            brand: action.payload.brand,
            production_year: action.payload.production_year,
            after_car_accident: action.payload.after_car_accident
          }
        ]
      };
    case actions.REMOVED_MOTORCYCLE:
      return { ...state, motorcycles: state.motorcycles.filter(motorcycle => motorcycle.id !== action.payload.id) };
    case actions.EDITABLE_MOTORCYCLE:
      const new_payload = state.motorcycles.map((motorcycle) => {
        if (motorcycle.id === action.payload.id) {
          const updatedItem = { ...motorcycle, editing: true };

          return updatedItem;
        }

        return motorcycle;
      });

      return { ...state, motorcycles: new_payload };
    case actions.UPDATED_MOTORCYCLE:
      const updated_payload = state.motorcycles.map((motorcycle) => {
        if (motorcycle.id === action.payload.motorcycle.id) {
          const updatedItem = {
            ...motorcycle,
            editing: false,
            brand: action.payload.motorcycle.brand,
            production_year: action.payload.motorcycle.production_year,
            after_car_accident: action.payload.motorcycle.after_car_accident
          };

          return updatedItem;
        }

        return motorcycle;
      });

      return { ...state, motorcycles: updated_payload };
    case actions.EDIT_CANCEL:
      const edited_payload = state.motorcycles.map((motorcycle) => {
        if (motorcycle.id === action.payload.id) {
          const updatedItem = { ...motorcycle, editing: false };

          return updatedItem;
        }

        return motorcycle;
      });

      return { ...state, motorcycles: edited_payload};
    case actions.FETCH_SUCCEDED:
      const modified_payload = [...action.payload.motorcycles]

      for (let motorcycle of modified_payload) {
        motorcycle.editing = false
      }

      return { ...state, motorcycles: modified_payload }
    case actions.UPDATE_CLICK:
      return { ...state, new_item_clicked: action.payload.new_item_clicked }
    default:
      return state;
  }
}
