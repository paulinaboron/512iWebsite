
let background = document.getElementById("bgimg");
const imgList = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png'];
var image = imgList[Math.floor(Math.random() * 9)];
background.style.backgroundImage = "url(./bg/" + image + ")";

function myFunction(){
    let animWindow = document.getElementById("window");
    animWindow.setAttribute("style", "display: block");
}


function clock(){
    let hour = document.getElementById("hour");
    let date = document.getElementById("date");
    let day = document.getElementById("day");
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var d = now.getDate();
    var mth = now.getMonth() + 1;
    var month = now.getMonth();
    var wd = now.getDay();

    if(h<10) h = "0" + h;
    if(m<10) m = "0" + m;
    if(s<10) s = "0" + s;
    if(d<10) d = "0" + d;
    if(mth<10) mth = "0" + mth;

    hour.innerText = h + " : " + m + " : " + s;
    date.innerText = d + " / " + mth + " / 2021";
    day.innerText = weekdays[wd] + " / " + months[month];


    setTimeout(clock, 1000);

}

clock()