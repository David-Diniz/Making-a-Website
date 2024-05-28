console.log("Hello World!")


function doSomething() {
    var text = document.getElementById("textField")
    text.style.display = "block"
    confirm('Click ok to change something on screen')
}

function canvasStuff() {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, 8000, 8000)
}
// function main(){
//     // alert("String go here")
//     var mydiv = document.getElementById("thing")
//     console.log(mydiv)
//     mydiv.innerText = "Stringy"
// }
// window.onload = main