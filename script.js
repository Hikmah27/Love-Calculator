function calculate() {
    if (yourName.value !== "" && loversName.value !== "") {
        display.innerHTML = `<h1>You are ${Math.round(Math.random()*100)}% compatible</h1>`
        yourName.value = "";
        loversName.value = "";
    }
    else {
        display.innerHTML = "Space cannot be empty"
        display.style.color = "red"
    }
    
}