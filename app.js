// Testing library json placeholder 

const httpRequest = new HttpRequestLibrary();

// GET METHOD

// httpRequest.get('https://jsonplaceholder.typicode.com/users',
//  function(err, response){
//    if(err){
//     console.log(err);

//    }else{
//     console.log(response);
//    }
// });


//POST METHOD

// const data = {
//   title: 'Custom post',
//   body: 'This is a custom post'
// };
// httpRequest.post('https://jsonplaceholder.typicode.com/posts1', data, function(err, response){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(response);
//   }
  
// });


//PUT METHOD

// const data = {
//   title: 'Updated post',
//   body: 'This is updated post'
// };
// httpRequest.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(response);

//   }
// });


//DELETE MEHOD

httpRequest.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
});

