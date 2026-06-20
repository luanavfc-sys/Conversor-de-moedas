// Conectar o index com o script:
// 1. Criar o arquivo script.js
// 2. Escrever no index <script src="./script.js"></script> antes do fechamento da tag body
// 3. Para testar se o script está conectado basta escrever console.log("olá") no script.js
// 4. Abrir o index.html no navegador 
// 5. Clicar com o botão direito do mouse e clicar em inspecionar para abrir o console do navegador
// 6. Verificar se a mensagem "olá" está no console,se aparecer significa que o script está conectado.


//Passo a passo para criar o conversor de moedas:
// 1. Primeiro passo é apertar o botão e saber que esse botão está chamando uma função ou sendo clicado.
// 2. Para isso precisamos criar uma função para conseguirmos achar o botão e criar um evento para ele.
const convertButton = document.querySelector(".convert-button")
// 3. Testar com console.log para verificar se o botão foi encontrado:

// EXEMPLO:
// console.log(convertButton)

// 4. Agora que o botão foi encontrado,precisamos criar um evento para ele
// 5. E criar uma function
// 6. TODA vez que o botão for clicado ele irá chamar uma função que eu msm vou criar para aperecer uma
// mensagem no console.

// EXEMPLO:
//    convertButton.addEventListener ("click", function (){
//    console.log("O botão foi clicado!")
//    })

// 7. Agora precisamos criar uma função para achar o input aonde o usúario irá digitar o valor 
// para ser convertido.
const inputCurrency = document.querySelector(".input-currency")
// 8. Agora eu pego essa função e coloco dentro  do evento do botão parq que toda vez que o botão
// for clicado ele irá pegar o valor do input e mostrar no console.

//EXEMPLO:
    //convertButton.addEventListener ("click", function (){
    //const inputCurrency = document.querySelector(".input-currency")
    //console.log(inputCurrency.value) //.value para pegar só o valor e não o input todo
   //})

// 9. Agora que o valor do input está aparecendo toda vez que aperta no botão precisa fazer que esse valor
// converta  para a moeda selecionada no select, para isso vamos criar uma função com o valor do dolar

//EXEMPLO:
//   convertButton.addEventListener ("click", function (){
//   const inputCurrencyValue = document.querySelector(".input-currency").value
//   const dolarToday = 5.10
//   console.log(inputCurrencyValue) //.value para pegar só o valor e não o input todo
//   })

// 10. Depois criamos uma variável para dividir o valor digitado no input pelo valor do dolar
// 11. Trocar no console.log em vez de mostrar o inputCurrencyValue, mostrar o convertedValue que é o 
// valor convertido para a moeda selecionada no select.

// EXEMPLO:
//   convertButton.addEventListener ("click", function (){
//   const inputCurrencyValue = document.querySelector(".input-currency").value //Achei o input
//   const dolarToday = 5.10 //Defini o valor do Dólar
//   const convertedValue = inputCurrencyValue / dolarToday //Dividi Real elo Dólar 
//   console.log(convertedValue) //.value para pegar só o valor e não o input todo e mostrar no console
//   })

// 12. Agora que o valor convertido está aparecendo no console, precisamos mostrar esse valor na tela
// do usuário, para isso vamos achar ele aqui no JS. 
// 13. Para isso precisamos a caixa aonde ficará o valor na tela, primeiro achamos o valor em real.
// 14. Depois achamos o valor em dólar, e depois mostramos o valor convertido no lugar do valor em dólar.

// EXEMPLO:
//   convertButton.addEventListener ("click", function (){
//   const inputCurrencyValue = document.querySelector(".input-currency").value //Achei o input
//   constc currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
//   const currencyValueConverted = document.querySelector(".currency-value") //Valor em dólar
//   const dolarToday = 5.10 //Defini o valor do Dólar
//   const convertedValue = inputCurrencyValue / dolarToday //Dividido Real pelo Dólar 
//   console.log(convertedValue) //.value para pegar só o valor e não o input todo e mostrar no console
//   })

// 15. Agora, o currencyValueToConvert que é a caixa aonde tem o valor em real, precisa receber o 
// valor digitado no input para trocar na tela, para isso usamos o innerHTML para trocar o texto da caixa
// pelo valor digitado.
// 16. E o currencyValueConverted que é a caixa aonde tem o valor em dólar, precisa receber o valor
//  convertido, então mudamos o texto da caixa pelo valor convertido usando o innerHTML.

// EXEMPLO:
//  convertButton.addEventListener ("click", function (){
//   const inputCurrencyValue = document.querySelector(".input-currency").value //Achei o input
//   const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
//   const currencyValueConverted = document.querySelector(".currency-value") //Valor em dólar
//   const dolarToday = 5.10 //Defini o valor do Dólar
//   const convertedValue = inputCurrencyValue / dolarToday //Dividido Real pelo Dólar 
//   currencyValueToConvert.innerHTML = inputCurrencyValue // trocar o texto da caixa pelo valor digitado
//   currencyValueConverted.innerHTML = convertedValue
//   console.log(convertedValue) //.value para pegar só o valor e não o input todo e mostrar no console
// })

// 17. Deu certo, mas os números estão todos gigantes e feios,para arrumar isso usaremos o new Intl.
// O new Intl é uma função do JavaScript que formata os números de acordo com a moeda e o país
// Então em vez de deixar assim faremos a seguinte modificação:
// -Em vez de deixar assim:
//   currencyValueToConvert.innerHTML = inputCurrencyValue 
//- Deixaremos:
// currencyValueToConvert.innerHTML = estrutura: new Intl e no final }).format(inputCurrencyValue)

//  EXEMPLO:
//    convertButton.addEventListener ("click", function (){
//    const inputCurrencyValue = document.querySelector(".input-currency").value //Achei o input
//    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
//    const currencyValueConverted = document.querySelector(".currency-value") //Valor em dólar

//    const dolarToday = 5.10 //Defini o valor do Dólar
//    const convertedValue = inputCurrencyValue / dolarToday //Dividido Real pelo Dólar 

//     //Estrutura new Intl: 
//       currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
//       style:"currency", //Estilo de moeda
//       currency: "BRL"  // Qual moeda seria?! BRL
//       }).format(inputCurrencyValue) //Trocar o texto da caixa pelo valor digitado no input

//       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
//       style:"currency",
//       currency:"USD"
//       }).format(convertedValue)
// })

// 18. Agora temos que dar a opção de escolher para euro também. 
// Quando eu terei que saber qual das opções precisa converter?! Depois que apertarmos o Botão
// de converter. -> Quando apertar o botão, ele precisa pegar a moeda que foi escolhida 
// para ser convertida e converter.
// Como fazer isso? 
// -Primeiro precisamos mapear aonde está o select de escolha do index
// -Dar um value nas opções e deixar nela o nome da moeda para não dar problema no código,para isso:
//  Ir no index procurar as opções e colocar dentro dela um value="dolar"
// -Dar um console.log(currencySelect.value) para ver se está funcionando

//EXEMPLO:
   // convertButton.addEventListener("click", function () {
   //    const inputCurrencyValue = document.querySelector(".input-currency").value //Achei o input
   //    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
   //    const currencyValueConverted = document.querySelector(".currency-value") // Valor em dólar
   //    const currencySelect = document.querySelector(".currency-select") // Achei o Select

   //    const dolarToday = 5.10 //Defini o valor do Dólar
   //    const euroToday = 5.90  // Defini o valor do Euro
   //    const convertedValue = inputCurrencyValue / dolarToday //Dividido Real pelo Dólar 

   //    console.log(currencySelect.value)

   //    //Estrutura new Intl: 
   //    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
   //       style: "currency", //Estilo de moeda
   //       currency: "BRL" // Qual moeda seria?! BRL
   //    }).format(inputCurrencyValue) //Trocar o texto da caixa pelo valor digitado no input

   //    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
   //       style: "currency",
   //       currency: "USD"
   //    }).format(convertedValue)
   // })

// 19. Agora iremos fazer um "se selecionar o dolar,converter para dolar. Se selecionar euro.
// converter para euro."
// Usaremos o if para fazer isso, como funcionaria?!
// - Se meu if (currencySelect)-> Opção de moeda escolhida for == "dolar". Pegamos a estrutura new Intl
// que criei para o dolar e coloco dentro da {}

const currencySelect = document.querySelector(".currency-select") // Achei o Select
       

convertButton.addEventListener("click", function convertValues() {
       const inputCurrencyValue = document.querySelector(".input-currency").value //Achei o input
       const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
       const currencyValueConverted = document.querySelector(".currency-value") // Valor em dólar
       
       
       const dolarToday = 5.10 //Defini o valor do Dólar
       const euroToday = 5.90  // Defini o valor do Euro
       const convertedValue = inputCurrencyValue / dolarToday //Dividido Real pelo Dólar 
       const convertedValueEUR = inputCurrencyValue / euroToday // Dividido Real pelo Euro

       // Se escolher o Dolar
       if(currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(convertedValue)
         }

       // Se escolher Euro
       if(currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(convertedValueEUR)
         }

       //Estrutura new Intl: 
       currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
       style: "currency", //Estilo de moeda
       currency: "BRL" // Qual moeda seria?! BRL
       }).format(inputCurrencyValue) //Trocar o texto da caixa pelo valor digitado no input
       
      })


// 20. Agora eu quero que mude a bandeira toda vez que eu selecionar o euro, para fazer isso:
// -  Mapear o currencySelect 
// -  Adicionar um evento no currencySelect chamado change e criar uma função para ser chamada
// para identificar toda vez que o select for mudado 
// - Criar um "if" se for mudada para euro eu mudo o nome 
// - Procurar a imagem no queryselector e usar o src para minha imagem conforme a escolha da moeda 
// a ser convertida.
// - Para finalizar, eu quero que meu usuário digite um valor, mas caso eu mude a moeda após ter digitado
// ele só converta para bandeira novo sem apagar o valor digitado só por mudar de bandeira.
// Para isso é só chamat a função no final de código para efetuar.

       currencySelect.addEventListener("change", function () {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img2")

        if(currencySelect.value == "dolar") {
         currencyName.innerHTML = "Dólar Americano"
         currencyImage.src = "./assets/dolar.png"
        }

        if(currencySelect.value == "euro") {
         currencyName.innerHTML = "Euro"
         currencyImage.src = "./assets/euro.png"
        }
        convertValues()
      })