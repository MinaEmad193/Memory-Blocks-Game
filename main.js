// Start Message
let startMsgBox = document.createElement("div")
startMsgBox.className = "start-msg-box"
document.body.appendChild(startMsgBox)

let startBtn = document.createElement("button")
startBtn.className = "start-btn"
startBtn.innerHTML = "Let's Get Start !"
startMsgBox.appendChild(startBtn)

let nameInputField = document.createElement("input")
startMsgBox.appendChild(nameInputField)
nameInputField.className = "name-field"
nameInputField.style.display = "none"
nameInputField.setAttribute("placeholder" , "Add Your Name Here")

let inBtn = document.createElement("button")
inBtn.className = "in-btn"
inBtn.innerHTML = "Sign In"
startMsgBox.appendChild(inBtn)
inBtn.style.display = "none"

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none"
    nameInputField.style.display = "block"
    inBtn.style.display = "block"
})

inBtn.addEventListener("click", function() {
    inputValue = nameInputField.value
    let userName = document.querySelector(".name")
    userName.innerHTML = inputValue
    startMsgBox.style.display = "none"
})
// Start Message

// Images Var
// Github
let github = document.createElement("img")
github.src = "img/Github.png"
// Github

// Cmd
let cmd = document.createElement("img")
cmd.src = "img/Cmd.png"
// Cmd

// Code
let code = document.createElement("img")
code.src = "img/Code.png"
// Code

// CSS
let css = document.createElement("img")
css.src = "img/Css.png"
// CSS

// HTML
let html = document.createElement("img")
html.src = "img/HTML.png"
// HTML

// Java
let java = document.createElement("img")
java.src = "img/Java.png"
// Java

// JS
let js = document.createElement("img")
js.src = "img/JavaScript.png"
// JS

// Python
let pyth = document.createElement("img")
pyth.src = "img/Python.png"
// Python

// Question Mark
let questionMark = document.createElement("img")
questionMark.src = "img/Question-mark.png"
// Question Mark

// React
let react = document.createElement("img")
react.src = "img/React.png"
// React

// Vue
let vue = document.createElement("img")
vue.src = "img/Vue.png"
// Vue
// Github
let github2 = document.createElement("img")
github2.src = "img/Github.png"
// Github

// Cmd
let cmd2 = document.createElement("img")
cmd2.src = "img/Cmd.png"
// Cmd

// Code
let code2 = document.createElement("img")
code2.src = "img/Code.png"
// Code

// CSS
let css2 = document.createElement("img")
css2.src = "img/Css.png"
// CSS

// HTML
let html2 = document.createElement("img")
html2.src = "img/HTML.png"
// HTML

// Java
let java2 = document.createElement("img")
java2.src = "img/Java.png"
// Java

// JS
let js2 = document.createElement("img")
js2.src = "img/JavaScript.png"
// JS

// Python
let pyth2 = document.createElement("img")
pyth2.src = "img/Python.png"
// Python
// React
let react2 = document.createElement("img")
react2.src = "img/React.png"
// React

// Vue
let vue2 = document.createElement("img")
vue2.src = "img/Vue.png"
// Vue
// Images Var


// Images Array
let allImgs = [cmd, code, css, github, html, java, js, pyth, react, vue, cmd2, code2, css2, github2, html2, java2, js2, pyth2, react2, vue2]
// Images Array

// Random Images Index
let imgsRandomIndex = Math.floor(Math.random() * allImgs.length)
// Random Images Index

// Create Images Container
let imgsContainer = document.querySelector(".imgs-cont")

// Create Image card

function shuffel(array) {
    // Setting Vars
    let current = array.length,
    temp,
            random;

    // Get The New Array
    while (current > 0) {

    // Get Random Number
    random = Math.floor(Math.random() * current)

    // Decrease The Length By One
    current--

    // [1] Save The Element In The Stash
    temp = array[current]

    // [2] Get Random Element From Stash
    array[current] = array[random]

    // [3] Get Random Element From Stash
    array[random] = temp
}

// [4] Append The New Array in The Page
for (let i = 0; i < array.length; i++) {
    imgsContainer.appendChild(array[i])
}

}

shuffel(allImgs)

// Add Disabled Class On All Images
let allCards = document.querySelectorAll(".imgs-cont img")
allCards.forEach((ele) => ele.className = "disabled")
// Add Disabled Class On All Images

// dispabled images And Storage It's Src
let disImgs = document.querySelectorAll(".imgs-cont img")
disImgs.forEach((ele) => ele.setAttribute("data-src" , ele.getAttribute("src")))
disImgs.forEach((ele) => ele.setAttribute("src", "img/Question-mark.png"))
// dispabled images And Storage It's Src

let tries = document.querySelector(".tries")
let wrongTries = 0
let rightTries = 0

// Set Game Logic
allImgs.forEach((ele) => ele.addEventListener("click", function() {
    // Get Current Card OnClick
    currentCard = event.target
    currentCard.classList.remove("disabled")
    currentCard.classList.add("enabled")
    currentCard.setAttribute("src", currentCard.getAttribute("data-src"))
    
    function allFlipped() {
        // Get The Images With Enabled Class
        let allActiveCard = allImgs.filter(ele => ele.classList.contains("enabled"))
        
        // If Two Images Are Selected
        if (allActiveCard.length === 2) {

            // If They Are The Same
            if (allActiveCard[0].getAttribute("data-src") === allActiveCard[1].getAttribute("data-src")) {
                allActiveCard[0].setAttribute("src", allActiveCard[0].getAttribute("data-src"))
                allActiveCard[1].setAttribute("src", allActiveCard[1].getAttribute("data-src"))
                allActiveCard[0].classList.remove("enabled")
                allActiveCard[1].classList.remove("enabled")
                rightTries += 1
            }
            
            // If They Are Not The Same
            if(allActiveCard[0].getAttribute("data-src") !== allActiveCard[1].getAttribute("data-src")) {
                setTimeout(() => {
                    allActiveCard[0].setAttribute("src" , "img/Question-mark.png")
                    allActiveCard[1].setAttribute("src" , "img/Question-mark.png")
                    allActiveCard[0].classList.add("disabled")
                    allActiveCard[0].classList.remove("enabled")
                    allActiveCard[1].classList.add("disabled")
                    allActiveCard[1].classList.remove("enabled")
                    wrongTries += 1
                    tries.innerHTML = wrongTries
                }, 500);
            }

            // Generate Win Msg
            if (rightTries === 10) {
                let body = document.querySelector("body")
                let winMsgBox = document.createElement("div")
                winMsgBox.className = "win-msg"
                
                let winMsgContent = document.createElement("p")
                winMsgContent.innerHTML = `congrats, You Won After ${wrongTries} Tries`

                let winMsgBoxRep = document.createElement("button")
                winMsgBoxRep.innerHTML = "Play Again !"

                body.appendChild(winMsgBox)
                winMsgBox.appendChild(winMsgContent)
                winMsgBox.appendChild(winMsgBoxRep)
                imgsContainer.style.pointerEvents = "none"

                winMsgBoxRep.addEventListener("click", function() {
                    window.location.reload()
                })
                replay()
            }
        }
    }
    allFlipped()
}))
// Set Game Logic



// Get Current Card OnClick


