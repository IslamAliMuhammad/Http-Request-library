//This file for testing http request library

const http = new HttpRequestLibrary();

//Testing get()

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


//Testing post() 

// const data = {
//   title: 'title for trying to post',
//   body: 'body for trying to post'
// };
// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(newPost => console.log(newPost))
// .catch(() => console.log('Error: Faild to post'));


// Testing put method

// const data = {
//   title: 'title for trying to put',
//   body: 'body for trying to put'
// };
// http.put('https://jsonplaceholder.typicode.com/posts/1', data)
// .then(updatedData => console.log(updatedData))
// .catch(() => console.log('Error: Faild to update (PUT)'));


// Testing delete method

// http.delete('https://jsonplaceholder.typicode.com/posts/1')
//     .then(deletedData => console.log(deletedData))
//     .catch(() => console.log('Error: Faild to delete'));