function showAlert(){
alert("Welcome");
}

function showBrowser(){
alert(
navigator.userAgent
);
}

function openPage(){
window.open(
"https://google.com",
"_blank"
);
}

setInterval(()=>{

document
.getElementById("clock")
.innerHTML=
new Date()
.toLocaleTimeString();

},1000);