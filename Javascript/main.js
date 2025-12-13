function greet(name , callback){ //callback is passed as a parameter
    console.log("Hello " + name);
    callback(); // callback function is invoked here
}

function saybye(){ // this is the callback function
    console.log("Bie!")
}

greet("Anubhav" , saybye); // saybye is passed as an argument



//callback hell example

function loginUser(user, callback) {
    setTimeout(function () {
        console.log("User logged in");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(function () {
        console.log("User profile data fetched");
        callback();
    }, 1000); //why setTimeout? to simulate an asynchronous operation like fetching data from a server
}

function getPosts(callback) {
    setTimeout(function () {
        console.log("User posts fetched");
        callback();
    }, 1000);
}

function getComments(callback) {
    setTimeout(function () {
        console.log("User comments fetched");
        callback();
    }, 1000);
}

const user = { username: "anubhav", password: "12345" };

loginUser(user, function () {
    getProfile(function () {
        getPosts(function () {
            getComments(function () {
                console.log("Done");
            });
        });
    });
});

// The above code demonstrates "callback hell" where multiple nested callbacks make the code hard to read and maintain.






  async function showData(){ // async will make function => promise 
    let data = await getData(); // await , waits for async ( promise ) to resolve and result ko value bna deta hai
    console.log(data);
  }

  async function getUsers(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    }
    catch (error){
        console,log(error);
    }
  }





