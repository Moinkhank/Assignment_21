const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 10) + 1;
      resolve(randomValue);
    }, 1000);
  });
  
  promise.then((randomValue) => {
    console.log( "The random value is "+randomValue);
  });
  
  