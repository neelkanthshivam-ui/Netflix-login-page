function addData(){

let text =
document.getElementById("inputText").value;

if(text===""){
alert("Enter something");
return;
}

let p =
document.createElement("p");

p.innerText=text;

document
.getElementById("output")
.appendChild(p);

document
.getElementById("inputText")
.value="";

}