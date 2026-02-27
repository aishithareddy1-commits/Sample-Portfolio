//alert("This is aishitha's Portfolio");

let form = document.getElementById("contactform");
form.addEventListener("submit",function(event){
    let nameBox = document.getElementById("Name").value;
    if(nameBox === "")
    {
        event.preventDefault();
        alert("Oops! Please enter your name before submiting");
    }
    else
    {
        alert("Thanks for reaching out, " + nameBox + "!")
    }
});

let themeButton = document.getElementById("themeToggle");
themeButton.addEventListener("click",function()
{
    document.body.classList.toggle("dark-mode");
});

let greetingBox = document.getElementById("timeGreeting");
let currentHour = new Date().getHours();
let message = "";

if (currentHour <= 11)
{
    message = "Good morning 🌅"
}
else if ( currentHour < 17)
{
    message = "Good afternoon🌇"
}
else 
{
    message = "Good evening 🌆"
}

greetingBox.textContent = message;