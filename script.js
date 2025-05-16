const box = document.getElementById("box")
const btn = document.getElementById("btn")
let theme = "white"




btn.addEventListener("click", function() {
    if (theme == "white") {
        box.textContent = "Черная тема!"
        box.style.backgroundColor = "black"
        box.style.color = "white"
        theme = "black"
    } else {
        box.textContent = "Белая тема!"
        box.style.backgroundColor = "white"
        box.style.color = "black"
        theme = "white"
    }

})
