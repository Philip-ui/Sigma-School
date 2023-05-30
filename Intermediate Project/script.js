import { apiKey } from "./config.js";

//const url = 'https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
	}
};

async function fetchStock(inputStocks){
    try {
        const response = await fetch(`https://real-time-finance-data.p.rapidapi.com/search?query=${inputStocks}&language=en`, options);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}

//convertCurrency("USD","MYR",10)

// DOM element set up
const stockEl1 = document.querySelector("#stock1")
//const currencyEl2 = document.querySelector("#currency2")
//const amountEl1 = document.querySelector("#amount1")
//const amountEl2 = document.querySelector("#amount2")
//const swap = document.querySelector("#swap")
//const rateEl = document.querySelector("#rate")

// JavaScript Pseudocode
    // When enter a number, perform calculation
        // the converted currency calculation will take place (based on rate from API)
        // display results
    // Swap will swap up and bottom currency + values with each other
        // perform calculation

async function displayStock(){
    let stock1 = stockEl1.value
//    let currency2 = currencyEl2.value
//    let amount = amountEl1.value
//    console.log(currency1,currency2,amount)

    let data = await fetchStock(stock1)
    console.log("DATA",data)
//    let convertedValue = data.new_amount

//    let rates = (data.new_amount/data.old_amount)
//    console.log(rates)

//    rateEl.innerText = `1 ${currency1} : ${rates.toFixed(4)} ${currency2}`
//    amountEl2.value = convertedValue
//    console.log("EL2 is UPDATED")
}

//amountEl1.addEventListener("input",calculate)
//currencyEl1.addEventListener("change",calculate)
//currencyEl2.addEventListener("change",calculate)
/*
swap.addEventListener("click",()=>{
    let temporaryVariable = currencyEl1.value
    currencyEl1.value = currencyEl2.value
    currencyEl2.value = temporaryVariable
    calculate()
})
*/
displayStock()
