import * as actions from '../constants/MotorcycleConstants';

export function addedMotorcycle(motorcycle) {
  return {
    type: actions.ADD_MOTORCYCLE,
    payload: {
      id: motorcycle.id,
      brand: motorcycle.brand,
      production_year: motorcycle.production_year,
      after_car_accident: motorcycle.after_car_accident,
      new_item_clicked: false
    }
  }
};

export function updateMotorcycleRequest(event, id) {
  event.preventDefault();
  const data = new FormData(event.target);

  return {
    type: actions.UPDATE_MOTORCYCLE_REQUEST,
    payload: {
      id,
      data
    }
  }
}

export function updatedMotorcycle(motorcycle) {
  return {
    type: actions.UPDATED_MOTORCYCLE,
    payload: {
      motorcycle
    }
  }
}

export function editItem(id) {
  return {
    type: actions.EDITABLE_MOTORCYCLE,
    payload: {
      id
    }
  }
}

export function editedMotorcycle(brand, production_year, after_car_accident) {
  return {
    type: actions.EDIT_MOTORCYCLE,
    payload: {
      brand,
      production_year,
      after_car_accident
    }
  }
};

export function editCancel(id) {
  return {
    type: actions.EDIT_CANCEL,
    payload: {
      id
    }
  }
}

export function clickedAddButton() {
  return {
    type: actions.UPDATE_CLICK,
    payload: {
      new_item_clicked: true
    }
  }
}

export function abandonSave() {
  return {
    type: actions.UPDATE_CLICK,
    payload: {
      new_item_clicked: false
    }
  }
}

export function startedPreload() {
  return {
    type: actions.FETCH_STARTED
  }
};

export function finishedPreload(data) {
  return {
    type: actions.FETCH_SUCCEDED,
    payload: {
      motorcycles: [...data.body]
    }
  }
};

export function deleteMotorcycleRequest(id) {
  return {
    type: actions.REMOVE_MOTORCYCLE_REQUEST,
    payload: {
      id
    }
  }
};

export function deletedMotorcycle(id) {
  return {
    type: actions.REMOVED_MOTORCYCLE,
    payload: {
      id
    }
  }
};

export function submitStart(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  return {
    type: actions.SUBMIT_STARTED,
    payload: {
      data
    }
  }
}
