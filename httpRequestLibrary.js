//Library for making an http request with for http mehods (GET, POST, PUT, DELETE)

class HttpRequestLibrary {

  //HTTP GET REQUEST
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  //HTTP POST REQUEST
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const newData = await response.json();
    return newData;
  }

  //HTTP PUT REQUEST
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const updatedData = await response.json();
    return updatedData;
  }

  //HTTP DELETE REQUEST
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const deletedData = await response.json();
    return 'Data deleted';
  }


}

