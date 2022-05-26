const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() { 
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    hourHand.style.transform = `rotate(${((hours / 12) * 360) + ((minutes/60)*30) + 90}deg)`;
    minHand.style.transform = `rotate(${((minutes / 60) * 360) + ((seconds/60)*6) + 90}deg)`;
    secondHand.style.transform = `rotate(${((seconds / 60) * 360) + 90}deg)`;
}

setInterval(setDate, 1000);
