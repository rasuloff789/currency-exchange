alert(`Valyuta counter Qo'rqma olib ketishmaydi :))`)
var exchangeForm = document.querySelector('.exchange-form');
var result = exchangeForm.querySelector('.value-of-exchange');
var submitBtn = exchangeForm.querySelector('.submit-btn');
var numberExchange =exchangeForm.querySelector('.number-of-exchange');
var textIfMinus = exchangeForm.querySelector('.text-minus');
// var textverify = exchangeForm.querySelector('.textVerify');
submitBtn.addEventListener('click' , function(evt){
  evt.preventDefault();
  var numberResult = parseInt(numberExchange.value , 10) ;
  var currencyType = document.querySelector('.currency-type');
  var currencyIndex = currencyType.selectedIndex;
  var currencySelect = currencyType.querySelectorAll('OPTION')[currencyIndex].value ;
  var currencyValue = parseInt(currencySelect , 10) ;
  if ( numberResult > 0 ){
    result.textContent = Math.round(numberResult * currencyValue) ;
    textIfMinus.classList.add('d-none'); 
    textIfMinus.classList.remove('d-block'); 
    
  }else{
    textIfMinus.classList.remove('opacity-0'); 
    textIfMinus.classList.add('d-block'); 
  }
})