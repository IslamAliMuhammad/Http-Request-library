//Ajax Http Request Library (GET, POST, PUT, DELETE)

//constructor function that offer interface for library
function HttpRequestLibrary(){
  this.http = new XMLHttpRequest();
}


//GET http method
HttpRequestLibrary.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    }else{
        callback("Errorr: " + self.http.status);
    }
  }

  this.http.send();
}

//POST http mehod
HttpRequestLibrary.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-Type', 'application/json');
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 201){
      callback(null, self.http.responseText);
    }else{
      callback('Error: ' + self.http.status);
    }
    
  }
  this.http.send(JSON.stringify(data));
}

//PUT http mehod
HttpRequestLibrary.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-Type', 'application/json');

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    }else{
      callback('Error: ' +  self.http.status);
    }
  }

  this.http.send(JSON.stringify(data));
}

//DELETE http mehtod
HttpRequestLibrary.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);

  const self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, 'Post Deleted');
    }else{
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send();
}