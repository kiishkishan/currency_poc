"use strict";

var limits = [];

const getCurrencyValue = () => {
  console.log(event.target.value + " = " + event.target.checked);
  if (event.target.checked == true) {
    limits.push(event.target.value);
    console.log(limits.length);
  }
  if (event.target.checked == false) {
    for (let i = 0; i < limits.length; i++) {
      if (limits[i] === event.target.value) {
        console.log(limits[i]);
        limits.splice(i, 1);
      }
    }
  }

  // console.log(limits);
};

$(document).ready(
  $.debounce(400, function(e) {
    let API_KEY = "6c060bf41e9c9cbd7bdb123661270b98d1c8";
    let base = "USD";

    $.ajax({
      url: `https://currencyapi.net/api/v1/rates?key=${API_KEY}&base=${base}&limit=${limits}`,
      dataType: "json",
      success: processRates,
      error: handleRateError
    });
  })
);

$(document).change(
  $.debounce(400, function(e) {
    let API_KEY = "6c060bf41e9c9cbd7bdb123661270b98d1c8";
    let base = "USD";

    $.ajax({
      url: `https://currencyapi.net/api/v1/rates?key=${API_KEY}&base=${base}&limit=${limits}`,
      dataType: "json",
      success: processRates,
      error: handleRateError
    });
  })
);

function processRates(data, status) {
  console.log(data);
  $("#render_rates").html($("#rates").render(data));
}

function handleRateError(msg, data) {
  alert(msg);
}
