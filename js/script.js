
window.onload = function(){
      
  document.getElementById('dayToday').innerText = getTodaysDay() + ' is a great day for spending';
}

function getTodaysDay(){
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SaSaturdayt"];
  return days[new Date().getDay()];
}
let bank = 1000;
let wallet = 500;

const cantWithdraw = "Your balance is not enough - Go to work!";
const cantDeposit = "You don't have that. Please don't fool us. ";

document.getElementById('wallet').innerText = wallet;
document.getElementById('bank').innerText = bank;

function withdraw(amount){
  if(bank-amount >= 0 && amount > 0){
    bank = bank-amount-5;
    wallet = wallet+amount;
    document.getElementById('wallet').innerText = wallet;
    document.getElementById('bank').innerText = bank;
    document.getElementById('message').innerText = "You paid ₪5 commission. Enjoy!";
  } else if (amount > 0){
    console.log(cantWithdraw)
    document.getElementById('message').innerText = cantWithdraw;

    const element = document.getElementById('account_balance_text');
    element.classList.add('animate__animated', 'animate__flash');
    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__flash');
    });
  }
}

function deposit(amount){

  if(wallet-amount >= 0 && amount > 0){
    bank = bank+amount-5;
    wallet = wallet-amount;
    document.getElementById('wallet').innerText = wallet;
    document.getElementById('bank').innerText = bank;
    document.getElementById('message').innerText = "You paid ₪5 commission. Thank You!";
  } else if (amount > 0){
    console.log(cantDeposit);
    document.getElementById('message').innerText = cantDeposit;
    
    const element = document.getElementById('piggy');
    element.classList.add('animate__animated', 'animate__heartBeat');
    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__heartBeat');
    });

    
  }
}

function enterPIN(){
  inputEl = document.getElementById("pincode");
  
  if (inputEl.value.length >= inputEl.maxLength){
    
    inputEl.value = inputEl.value.slice(0, inputEl.maxLength);
    verifyPIN(inputEl.value);
  } 
}

function verifyPIN(value){
  msgElement = document.getElementById("pin_msg");
  if(value=="1111"){
    showMessage(true, msgElement, "Correct!");
    setTimeout(function(){
      showMessage(false, msgElement, "");
      switchScreens("screen_1", "screen_2");
      },1500);
  }else{
    showMessage(true, msgElement, "Wrong! Try 1111");
    setTimeout(function(){
      showMessage(false, msgElement, "");
      document.getElementById("pincode").value = "";
      },1500);
  }

}

function showMessage(isShow, element, msg){
  if(isShow){
    element.innerHTML = msg;
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
    element.innerHTML = msg;
  }
  
}

function switchScreens(onId, offId){
  screenOn = document.getElementById(onId);
  screenOff = document.getElementById(offId);
  screenOn.style.display = "none";
  screenOff.style.display = "block";

}

function correctPIN(isCorrect){
  message = document.getElementById("pin_msg")
  if(isCorrect) {

  } else {

  }
  var flashingTimes = 3;
  var flashing = setIntervalX(flashItem.bind(null,message),1000, 2);
}



function flashItem(item){
  if(item.style.opacity == "0"){
    item.style.opacity = "1";
  } else {
    item.style.opacity = "0";
  }
}

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

      callback();

      if (++x === repetitions) {
          window.clearInterval(intervalID);
      }
    }, delay);
}

function kickATM(){


  const element = document.getElementById('atm');

    element.classList.add('shake-slow','shake-constant');
    window.setTimeout(() => {
      element.classList.remove('shake-slow','shake-constant');
    }, 2000);

}