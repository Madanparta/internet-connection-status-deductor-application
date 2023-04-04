'use strict';

const imges = document.querySelector('#img');
const displaySatuts = document.querySelector('#status');
const bgColor = document.querySelector(".container");

function setColor() {
    bgColor.classList.add("online");
}


async function connectionStatus() {
    try {
      const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
      imges.src="./images/wi-fi-connected.png";
      setColor();
      return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error) {
      console.error(error);
      imges.src="./images/wifi-off.png";
      displaySatuts.textContent = "OOPS!!! Your Internet Connection is Down.";
      bgColor.classList.remove("online");
    }
  }
// internet connection 

setInterval(async () => {
    const result = await connectionStatus();
    if ( result ) {
        displaySatuts.textContent = "You're ONLINE!!! Connection looks good.";
        setColor(); 
    } 
  }, 2000);


// internet offline

window.addEventListener("load", async (event) => {
    if ( connectionStatus() ) {
        displaySatuts.textContent = "Online"
   } else {
    displaySatuts.textContent = "Offline"
   }
 });
