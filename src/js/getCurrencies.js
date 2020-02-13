// API "http://currencyapi.net/api/v1/currencies?key=8b4cdd2be86aefb4e7e4e1bd4e4b9bb8f862",

$(document).ready(function() {
  $.ajax({
    url:
      "http://currencyapi.net/api/v1/currencies?key=8b4cdd2be86aefb4e7e4e1bd4e4b9bb8f862",
    dataType: "json",
    success: processData,
    error: handleError
  });
});

function processData(data, status) {
  $("#currencies").html($("#renderCurrencies").render(data));
}

function handleError(msg, data) {
  alert(msg);
}
