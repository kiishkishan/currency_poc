"use strict";$(document).ready($.debounce(2e3,function(e){let c="6c060bf41e9c9cbd7bdb123661270b98d1c8";$.ajax({url:`https://currencyapi.net/api/v1/currencies?key=${c}`,dataType:"json",success:processData,error:handleError})}));function processData(e,c){console.log(e);$("#result").html($("#myTmpl").render(e))}function handleError(e,c){alert(e)}var limits=[],boxChecked=[];let getCurrencyValue=()=>{console.log(event.target.value+" = "+event.target.checked);event.target.checked==!0&&(limits.push(event.target.value),console.log(limits.length));if(event.target.checked==!1){for(let e=0;e<limits.length;e++)limits[e]===event.target.value&&(console.log(limits[e]),limits.splice(e,1))}};$(document).ready($.debounce(4e3,function(e){let c="6c060bf41e9c9cbd7bdb123661270b98d1c8",b="USD";$.ajax({url:`https://currencyapi.net/api/v1/rates?key=${c}&base=${b}&limit=${limits}`,dataType:"json",success:processRates,error:handleRateError})}));$(document).change($.debounce(400,function(e){let c="6c060bf41e9c9cbd7bdb123661270b98d1c8",b="USD";$.ajax({url:`https://currencyapi.net/api/v1/rates?key=${c}&base=${b}&limit=${limits}`,dataType:"json",success:processRates,error:handleRateError})}));function processRates(e,c){console.log(e);$("#render_rates").html($("#rates").render(e))}function handleRateError(e,c){alert(e)}