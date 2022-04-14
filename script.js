const dvd = document.getElementById("dvd")
const width = screen.width
const height = screen.height
var y = 0
var x = 0
function downLeft() {
    y++
    x--
    setStyle()
}
function downRight() {
    y++
    x++
    setStyle()
}
function upLeft() {
    y--
    x--
    setStyle()
}
function upRight() {
    y--
    x++
    setStyle()
}
function setStyle() {
    dvd.style.top = `${x}px`
    dvd.style.left = `${y}px`
}
function whatDo() {
    if((x == 0) && (y == 0)) {
        do {
            downRight()
        }
        while(y + 300 != height)
    }
    else if((y + 300 == height) && (x + 300 < width)) {
        do {
            upRight()
        }
        while(x + 300 != width)
    }
    else if((x + 300 == width) && (y + 300 < height)) {
        do {
            upLeft()
        }
        while(y != 0)
    }
    else if((y == 0) && (x + 300 < width)) {
        do {
            downLeft()
        }
        while(x != 0)
    }
    else if((x == 0) && (y + 300 < height)) {
        do {
            downRight()
        }
        while(y + 300 != height)
    }
}
document.addEventListener("keydown", (e) => {
    console.log("worked")
    if(e.key == "g") {
        whatDo()
    }
})

// do {
//     whatDo()
// }
// while(1 == 1)