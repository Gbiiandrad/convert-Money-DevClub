const convertButton = document.querySelector(".btn-convert");
const currencySelect = document.querySelector(".currency-select");


function convertValues() {
    //pegar o valor digitado pelo usuraio. Pegamos os o valor dele.
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    //para mudar o valor de baixo da img de converter
    const currencyValueToConvert = document.querySelector("#currency-value-to-convert"); // valor a converter
    const currencyValueConverted = document.querySelector("#currency-Value-Converted"); // valor convertido

    //const dolarToday = document.querySelector("");

    console.log(currencySelect.value);

    const dolarToday = 4.86;
    const euroToday = 5.21;
    const libraToday = 6.17;
    const bitcoinToday = 207431.83;

    //se no select => option for o de dolar ele irá entrar aqui
    if (currencySelect.value == "dolar") {
        //colocar o valor convertido no valor zerado e formatar esse valor do dolar (0.00) com pontos e virgulas

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    //se no select => option for o de euro ele irá entrar aqui
    if (currencySelect.value == "euro") {
        //colocar o valor convertido no valor zerado e formatar esse valor do Euro (0.00) com pontos e virgulas
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    }

    if (currencySelect.value == "libra") {
        //colocar o valor convertido no valor zerado e formatar esse valor do Euro (0.00) com pontos e virgulas
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "bitcoin") {
        //colocar o valor convertido no valor zerado e formatar esse valor do Euro (0.00) com pontos e virgulas
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    //para trocar o valor zerado para o valor do usuario e formatar esse valor ex (0,00) com pontos e virgulas
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);


}

//mudar a bandeira e o nome da conversao:
function changeCurrency(){
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    // para saber q nome vai colocar, esse nome é o nome do conversao baixo
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "./assets/img/img-estados-unidos.svg";  // Para mudar a imagem da conversao
    }  
    
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/img/img-euro.svg"; // Para mudar a imagem da conversao
    }  

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImg.src = "./assets/img/img-libra.svg"; // Para mudar a imagem da conversao
    } 

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/img/img-bitcoin.svg"; // Para mudar a imagem da conversao
    } 
   
    /* chamamos a função novamento para quando for mudado a moeda diretamento no select e 
    não precisar clicar no botão de converter*/
    convertValues();
}
currencySelect.addEventListener("change", changeCurrency);

// para quando o butão de converter foi clicado:
convertButton.addEventListener("click", convertValues);