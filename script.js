//declaring a variable 
const horshand = document.getElementById('hor');
const minutehand = document.getElementById('min');
const secondhand = document.getElementById('sec');


function clocktick() {
    const date = new Date(); //getting the current time
    const second = date.getSeconds() / 60;
    const minute = (second + date.getMinutes()) / 60;
    const hour = (minute + date.getHours()) / 12;

    //setting the rotation of the hands
    rotateClockHand(secondhand, second);
    rotateClockHand(minutehand, minute);
    rotateClockHand(horshand, hour);
}

//function to rotate the hands
function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

//calling a function
setInterval(clocktick, 1000);


//digital clock
function updateClock() {
	const clock = document.querySelector('.diclock');
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	hours = hours < 10? '0' + hours : hours;
	minutes = minutes < 10? '0' + minutes : minutes;
	seconds = seconds < 10? '0' + seconds : seconds;

	clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

//theme change
var backgrounds = ['https://cdn.pixabay.com/photo/2023/09/09/16/03/ai-generated-8243406_1280.jpg',
'https://img.freepik.com/premium-vector/ganpati-bappa-lord-ganesha_473883-58.jpg', 
'https://blog.cdn.level.game/2024/04/cute-ganpati-bappa-photo.webp',
'https://png.pngtree.com/png-vector/20240211/ourmid/pngtree-lord-krishna-png-image_11737282.png',
'https://i.pinimg.com/736x/a1/15/0f/a1150fcb8fd6562ff892c5fb3acc0534.jpg',
'https://cdn.magicdecor.in/com/2023/10/19163738/Shri-Krishna-Wallpaper-for-Pooja-Room.jpg',];

var currentBackgroundIndex = 0;


function changeBackground() {
    var div = document.getElementById('clock');
    div.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){

    var div = document.getElementById('clock');
    div.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
})

prev.addEventListener('click', function(){
    var div = document.getElementById('clock');
    
    currentBackgroundIndex = (currentBackgroundIndex - 1) ;
    div.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
})