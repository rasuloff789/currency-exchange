var exchangeForm = document.querySelector('.exchange-form');
var result = exchangeForm.querySelector('.value-of-exchange');
var submitBtn = exchangeForm.querySelector('.submit-btn');
var numberExchange = exchangeForm.querySelector('.number-of-exchange');
var textMinus = document.querySelector('.text-minus');
var textNot = document.querySelector('.text-not-number');

submitBtn.addEventListener('click' , function(evt){
  evt.preventDefault();
  var currencyValue = parseFloat(document.querySelector('.currency-type').value.trim() , 10);
  var exchangeSumm = parseFloat(numberExchange.value.trim() , 10);
  if(exchangeSumm.textContent === ""){
    textMinus.textContent = "trallalala";
    alert('dsdjnfsnd')
    numberExchange.classList.add('is-invalid');
    result.textContent = "0";
  }
  
  if ( currencyValue === 0 ){
    alert('Valyutani tanlang');
    return;
  }
  
  if(isNaN(exchangeSumm)){
    textNot.classList.add('d-block');
    textMinus.classList.remove('d-block');
    numberExchange.classList.add('is-invalid');
    result.textContent = "0";
    return;
  }
  
  if(exchangeSumm < 0){
    textNot.classList.remove('d-block');
    textMinus.classList.add('d-block');
    numberExchange.classList.add('is-invalid');
    result.textContent = "0";
    return;
  }
  
  resultNumber = Math.round(currencyValue * exchangeSumm) ;
  result.textContent = resultNumber;
  textNot.classList.remove('d-block');
  textMinus.classList.remove('d-block');
  numberExchange.classList.remove('is-invalid');
  
})