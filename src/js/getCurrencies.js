"use strict";

$(document).ready(
  $.debounce(2000, function(e) {
    let API_KEY = "6c060bf41e9c9cbd7bdb123661270b98d1c8";
    $.ajax({
      url: `https://currencyapi.net/api/v1/currencies?key=${API_KEY}`,
      dataType: "json",
      success: processData,
      error: handleError
    });
  })
);

function processData(data, status) {
  // these are the code blocks that i tried to limit the /currencies of max limit 10 by push it into an array and
  // loop it

  // const data1 = [];
  // const data2 = [];
  // const obj = {};
  // var result = Object.keys(data.currencies).map(function(key) {
  //   return [key, data.currencies[key]];
  // });
  // console.log(result[1]);
  // result.map((post, index) => {
  //   if (index < 10) {
  //     data1.push(post);
  //   }
  // });
  // console.log(data1);
  // data1.map((post, index) => {
  //   console.log(post);

  //   data2.push({
  //     [post[0]]: post[1]
  //   });
  // });
  // var myJsonString = JSON.stringify((data.currencies = 10));
  // console.log(myJsonString);
  // // console.log(data.currencies["AED"]);

  // var currenciesLength = Object.keys(data.currencies).length;
  // var currenciesLengthKeys = Object.keys(data.currencies);
  // console.log(currenciesLength);
  // console.log(currenciesLengthKeys);
  console.log(data);
  $("#result").html($("#myTmpl").render(data));
}

function handleError(msg, data) {
  alert(msg);
}
