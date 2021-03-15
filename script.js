//declare variables
var bar = document.getElementById("bar");
var bubble = document.querySelector(".bubble");
var label = document.getElementById("labelTemp");
var label2 = document.getElementById("labelTemp2");
var label3 = document.getElementById("labelTemp3");
var label4 = document.getElementById("labelTemp4");
var label5 = document.getElementById("labelTemp5");
var label6 = document.getElementById("labelTemp6");



//add an event listener to the input
bar.addEventListener("input", ()=> {
  setBubble(bar, bubble);

  //give the value you want for each year
if(bar.value == 2016) {
  label.innerHTML = "30,000";
  label2.innerText = "1.2 Million/day";
  label3.innerText = "250 Million";
  label4.innerText = "25-30";
  label5.innerText = "2";
  label6.innerText = "2";
  
} else if(bar.value == 2017) {
   label.innerHTML = "80,000";
  label2.innerText = "1.6 Million/day";
  label3.innerText = "350 Million";
  label4.innerText = "50";
  label5.innerText = "3";
  label6.innerText = "3";
  
} else if(bar.value == 2018) {
   label.innerHTML = "90,000";
  label2.innerText = "1.7 Million/day";
  label3.innerText = "450 Million";
  label4.innerText = "70";
  label5.innerText = "4";
  label6.innerText = "4";
} 
  else if(bar.value == 2019) {
   label.innerHTML = "110,000";
  label2.innerText = "2.1 Million/day";
  label3.innerText = "510 Million";
  label4.innerText = "75";
  label5.innerText = "4";
  label6.innerText = "3";
} 
   else if(bar.value == 2020) {
   label.innerHTML = "150,000";
  label2.innerText = "2.5 Million/day";
  label3.innerText = "590 Million";
  label4.innerText = "90";
  label5.innerText = "5";
  label6.innerText = "6";
} else {
   label.innerHTML = "15,000";
  label2.innerText = "1 Million/day";
  label3.innerText = "100 Million";
  label4.innerText = "10";
  label5.innerText = "1";
  label6.innerText = "1";
}
})

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
