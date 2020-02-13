"use strict";

const getCurrencies = () => {
  // Set up our HTTP request
  var xhr = new XMLHttpRequest();

  // Setup our listener to process completed requests
  xhr.onload = function() {
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      console.log("success!", xhr.responseText);
    } else {
      // What do when the request fails
      console.log("The request failed!");
    }

    // Code that should run regardless of the request status
    console.log("This always runs...");
  };

  // Create and send a GET request
  // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
  // The second argument is the endpoint URL
  xhr.open(
    "GET",
    "https://currencyapi.net/api/v1/currencies?key=8b4cdd2be86aefb4e7e4e1bd4e4b9bb8f862"
  );
  xhr.send();
  return xhr.responseText;
};

const getCurrencyValue = () => {
  console.log(event.target.value + " = " + event.target.checked);
};
