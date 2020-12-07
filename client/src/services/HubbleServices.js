const baseURL = "http://localhost:3000/hubble-data";


export default {
    getDescriptions() {
      return fetch(baseURL)
        .then(res => res.json());
    },
  
    addDescription(description) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(description),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
    },
  
    updateDescription(description) {
      return fetch(baseURL + description._id, {
        method: 'PUT',
        body: JSON.stringify(description),
        headers: { 
          'Content-Type': 'application/json' 
        }
      })
        .then(res => res.json());
    },
  
    deleteDescription(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
    }
  };
  