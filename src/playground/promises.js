const promise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve('this is my resolved');
  }, 1500);
});

promise.then((data)=>{
  console.log(data);
});