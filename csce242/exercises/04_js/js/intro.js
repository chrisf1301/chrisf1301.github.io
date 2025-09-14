/*
const sayHello = () => {
    console.log("hello world");
} 

document.getElementById("btn-click-me").oneclick= sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";  
    //document.getElementById("btn-click-me").classList.add("clicked"); 
    event.currentTarget.classList.add("clicked");   //current target is the button that was clicked 
}; 

document.getElementById("btn-happy").onclick = () => {
    pFeeling.getElementById("p-feeling").onclick = "yah"; 
    pFeeling.getElementById("p-feeling").classList.add("happy"); 
}






