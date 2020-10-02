export function addMotorcycleAPI(data) {
  return fetch(`http://localhost:4000/api/v1/motorcycles`, {
    method: 'POST',
    headers: {
      'Content-Disposition': 'form-data',
      'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
    },
    body: data
  })
  .then(res => res.json())
  .catch(err => alert(err.message));
}

export function updateMotorcycleAPI(payload) {
  return fetch(`http://localhost:4000/api/v1/motorcycles/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Disposition': 'form-data',
      'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
    },
    body: payload.data
  })
  .then(res => res.json())
  .catch(err => alert(err.message));
}

export function deleteMotorcycleAPI(id) {
  return fetch(`http://localhost:4000/api/v1/motorcycles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
    }
  })
  .then(res => res.json())
  .catch(err => alert(err.message));
}

export function fetchMotorcyclesAPI() {
  return fetch(`http://localhost:4000/api/v1/motorcycles`, {
    method: 'GET'
  })
  .then(res => res.json())
  .catch(err => alert(err.message));
}
