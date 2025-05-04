const mainText = document.getElementById("text");

const gif = document.getElementById("img");

const button1 = document.getElementsByTagName("button")[0];

function clickYes(){
    mainText.innerText = "TE AMO!!!!! ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️️";
    gif.style.display = "block";
    button1.style.display = "none";
    button2.style.display = "none";
    console.log('hihihi');
}

button1.addEventListener('click', clickYes);

const button2 = document.getElementsByTagName("button")[1];

function clickNo(){
     // Get screen and button dimensions
     const screenWidth = window.innerWidth;
     const screenHeight = window.innerHeight;
     const buttonWidth = button2.offsetWidth;
     const buttonHeight = button2.offsetHeight;

     // Generate random X and Y positions within screen bounds
     const randomX = Math.random() * (screenWidth - buttonWidth);
     const randomY = Math.random() * (screenHeight - buttonHeight);

     // Apply new position
     button2.style.left = `${randomX}px`;
     button2.style.top = `${randomY}px`;
     console.log('aaa');
}

button2.addEventListener('click', clickNo);
