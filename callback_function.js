function successCallback() {
    console.log("Success: Logged in successfully!");
}
function errorCallback() {
    console.log("Error: Invalid username or password.");
}



function isAuthenticated(username, password, successCallback, errorCallback) {
   if (username === "admin" && password === "password") {
    successCallback();
   } else {
    errorCallback();
   }
}

isAuthenticated("admin", "password", successCallback, errorCallback);
isAuthenticated("user", "1234", successCallback, errorCallback); 
