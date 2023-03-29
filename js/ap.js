document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  const randomNum = Math.floor(Math.random()*1677215);
  const randomcode = "#" + randomNum.toString(16);
  // const rgb = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.background = randomcode;
  document.getElementById("ip").innerHTML = randomcode;
  document.getElementById("btn").style.background = rgb;
}