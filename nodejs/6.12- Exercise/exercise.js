
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });
async function displayMovies(){
  try{
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if(customer.isGold){
    const TopMovies = await getTopMovies();
    console.log('Top movies: ', TopMovies);
    const email = await sendEmail();
    console.log('Email sent...');
    }
  }catch(err){
    console.log('Error',err.message);
  }
}

displayMovies();

function getCustomer(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);
  });
    
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
 
}

function sendEmail() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 4000);
});
}