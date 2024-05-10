console.log("Hello World!")


function doSomething() {
    alert('Did you see the change?')
    var mydiv = document.getElementById("thing")
    mydiv.innerText = "This String should appear only after a button press"
    console.log(mydiv)
}

// function main(){
//     // alert("String go here")
//     var mydiv = document.getElementById("thing")
//     console.log(mydiv)
//     mydiv.innerText = "Stringy"
// }
// window.onload = main