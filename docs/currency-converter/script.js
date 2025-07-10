const converter = document.getElementById("converter");
const amountInput = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const swapButton = document.getElementById("switch-button");

// LISTENERS
window.addEventListener("load", fetchCurrency);
converter.addEventListener("submit", convert);
swapButton.addEventListener("click", swapCurrencies);

// FUNC.S
async function fetchCurrency() {
    // API I chose to use: https://api.exchangerate-api.com/v4/latest/USD
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();

    console.log("Fething data...");
    console.log(data);

    const currencies = Object.keys(data.rates);

    currencies.forEach(currency => {
        const optionFrom = document.createElement("option");
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        from.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = currency;
        optionTo.textContent = currency;
        to.appendChild(optionTo);
    });
}

async function convert(event) {
    event.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromVal = from.value;
    const toVal = to.value;

    if (amount < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromVal}`);
    const data = await response.json();
    const rate = data.rates[toVal];
    const conversion = (amount * rate).toFixed(2);

    result.textContent = `${amount} ${fromVal} = ${conversion} ${toVal}`;
}

function swapCurrencies() {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;

    if (amountInput.value !== "") {
        convert(new Event("submit"));
    }

    swapButton.classList.add("clicked");
    setTimeout(() => {
        swapButton.classList.remove("clicked");
    }, 500);
}