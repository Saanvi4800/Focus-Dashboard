function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  let session = "AM";
  if (h >= 12) {
    session = "PM";
  }

  // convert 24-hour to 12-hour format
  h = h % 12;
  h = h ? h : 12; // if hour = 0, make it 12

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

 //Timer stuff
let timerInterval;

function startCountdown(){
clearInterval(timerInterval);

const input = document.getElementById("targetTime").value;
if(!input){
  alert("Please select a date and time")
   return;
}
const targetDate = new Date(input).getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const distance = targetDate - now;

if (distance < 0) {
 document.getElementById("countdown").textContent = "Time is up!";
 clearInterval(timerInterval);
 return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
timerInterval = setInterval(updateCountdown, 1000);
}

//Motivational Quote 
function newQuote() {
let quoteDeciding = Math.floor(Math.random()*10);
 if (quoteDeciding === 0){
    document.getElementById("quote").innerHTML = "Believe you can and you're halfway there. -Theodore Roosevelt";
 } else if (quoteDeciding ===1){
    document.getElementById("quote").innerHTML = "The only way to do great work is to love what you do. -Steve Jobs";
 } else if (quoteDeciding === 2) {
    document.getElementById("quote").innerHTML = "Your time is limited, don't waste it living someone else's life. -Steve Jobs";
 } else if (quoteDeciding === 3) {
    document.getElementById("quote").innerHTML = "The best way to predict the future is to create it. -Peter Drucker";
 } else if (quoteDeciding === 4) {
    document.getElementById("quote").innerHTML = "Success is not the key to happiness. Happiness is the key to success. -Albert Schweitzer";
 } else if (quoteDeciding === 5) {
    document.getElementById("quote").innerHTML = "Don't watch the clock; do what it does. Keep going. -Sam Levenson";
 } else if (quoteDeciding === 6) {
    document.getElementById("quote").innerHTML = "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt";
 } else if (quoteDeciding === 7) {
    document.getElementById("quote").innerHTML = "It does not matter how slowly you go as long as you do not stop. -Confucius";
 } else if (quoteDeciding === 8) {
    document.getElementById("quote").innerHTML = "Hardships often prepare ordinary people for an extraordinary destiny. -C.S. Lewis";
 } else {
    document.getElementById("quote").innerHTML = "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson";
 }  
}

//Tasks

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Pro Tip: Try typing something in the test box");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
      localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
      listContainer.innerHTML = localStorage.getItem("data");
}

showTask();