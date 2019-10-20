//Library for making an http request with for http mehods (GET, POST, PUT, DELETE)

class HttpRequestLibrary {

  //HTTP GET REQUEST
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //HTTP POST REQUEST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(newData => resolve(newData))
        .catch(() => reject('Error: Faild to post'));
    });
  }

  //HTTP PUT REQUEST
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(updatedData => resolve(updatedData))
        .catch(() => reject('Error: Faild to update (PUT)'));
    });
  }

  //HTTP DELETE REQUEST
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
      })
        .then(response => response.json())
        .then(() => resolve('Data deleted'))
        .catch(() => reject('Error: Faild to delete'));
    });
  }
}

