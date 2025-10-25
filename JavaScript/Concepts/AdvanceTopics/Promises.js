/*
Promise - An object representing the eventual completion or failure of an asynchronous operation.
 - It allows you to attach callbacks for success (resolved) and failure (rejected) cases.
 - Created using the Promise constructor.
 - Has three states: pending, fulfilled (resolved), and rejected.
 - Methods: then(), catch(), finally().

*/

/*
// Creating a promise
const promiseOne = new Promise((resolve, reject) => {
    // Do some asynchronous operation
    // DB call, API call, cryptography, etc.
    setTimeout(() => {
        console.log('Async task is completed..');
        resolve(); // Indicating that the promise is resolved successfully
    },2000)
});

console.log('Before calling the promise..');

promiseOne.then(() => {
    console.log('Promise is resolved successfully..');
})

*/

/*
// Another way of creating a promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Waiting for taks 2..');
        resolve();
    },1000)
}).then(() => {
    console.log('The task 2 is completed')
})

*/


/*

// Creating a promise that resolves with user data
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            userName: 'JohnDoe',
            userId: 12345,
            email: 'john.doe@example.com'
        });
    },2000)

})

promiseThree.then((user) => {
 console.log(user)
})

*/


/*

// Creating a promise that either resolves or rejects based on a condition
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if (!error){
            resolve({
                filename: 'cluber.txt',
                password: '12345'
            });
        }else{
            reject('Error: Something went wrong!!')
        }
    }, 2000);
})

promiseFour.then((filedata) => {
    console.log(filedata)
    return filedata.filename;
})
.then((filename) => {
    console.log(filename + ' is the file name')
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('The promise is either resolved or rejected..')
})

*/



/*

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if (!error){
            resolve({
                subject: 'JavaScript',
                password: '12345'
            });
        }else{
            reject('Error: JS went wrong!!')
        }
    },2000)
})


// -----using then, catch and finally-----

promiseFive.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('The promise is either resolved or rejected..')
})



// -----using async-await with try and catch-----

async function fetchData() {
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

// -----using async-await with then and catch-----
async function fetchFileName() {
    await promiseFive
    .then((data) => {
        console.log(data.subject)
    })
    .catch((error) => {
        console.log(error)
    })
}
fetchFileName()

*/


/*
// Example: Fetching user data from an API using async-await and try-catch
async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E: ", error)
    }
}

getAllUsers();
*/



// Example: Fetching user data from an API using Promises with then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(" E: ", error)
})