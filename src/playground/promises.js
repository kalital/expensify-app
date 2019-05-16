const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({
          name: 'khalid',
          age: 38
      });
    // reject('something went worg')
  }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data);

    return 'some date'
}).then((str) => {
  console.log(`does this run? ${str}`);
}).catch((error) => {
    console.log('error:', error)
});


console.log('after');