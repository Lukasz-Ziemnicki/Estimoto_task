import { all, fork, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../constants/MotorcycleConstants';
import { finishedPreload, deletedMotorcycle, addedMotorcycle, updatedMotorcycle } from "../actions/MotorcycleActions";
import * as Api from '../services/remote.js'

function* fetchMotorcycles() {
  try {
        const responseResult = yield call(Api.fetchMotorcyclesAPI);

        switch (responseResult.status) {
          case 200:
            return yield put(finishedPreload(responseResult));
          case 500:
            return alert('Zewnętrzny serwis niedostępny. Spróbuj ponownie.')
        }
    } catch(error) {
        console.log(error)
    }
}

function* removeMotorcycle(action) {
  try {
        const responseResult = yield call(Api.deleteMotorcycleAPI, action.payload.id);

        switch (responseResult.status) {
          case 200:
            return yield put(deletedMotorcycle(action.payload.id));
          case 500:
            return alert('Zewnętrzny serwis niedostępny. Spróbuj ponownie.')
        }
    } catch(error) {
        console.log(error)
    }
}

function* addMotorcycle(action) {
    try {
          const responseResult = yield call(Api.addMotorcycleAPI, action.payload.data);

          switch (responseResult.status) {
            case 201:
              return yield put(addedMotorcycle(responseResult.body));
            case 500:
              return alert('Zewnętrzny serwis niedostępny. Spróbuj ponownie.')
          }
      } catch(error) {
          console.log(error)
      }
}

function* updateMotorcycle(action) {
    try {
          const responseResult = yield call(Api.updateMotorcycleAPI, action.payload);

          switch (responseResult.status) {
            case 200:
              return yield put(updatedMotorcycle(responseResult.body));
            case 500:
              return alert('Zewnętrzny serwis niedostępny. Spróbuj ponownie.')
          }
      } catch(error) {
          console.log(error)
      }
}

function* watchFetch() {
   yield takeLatest(actions.FETCH_STARTED, fetchMotorcycles);
}

function* watchDelete() {
    yield takeEvery(actions.REMOVE_MOTORCYCLE_REQUEST, removeMotorcycle)
}

function* watchAdd() {
    yield takeEvery(actions.SUBMIT_STARTED, addMotorcycle)
}

function* watchUpdate() {
    yield takeEvery(actions.UPDATE_MOTORCYCLE_REQUEST, updateMotorcycle)
}


export default function* rootSaga() {
   yield all([
   watchFetch(),
   watchDelete(),
   watchAdd(),
   watchUpdate()
   ]);
}
