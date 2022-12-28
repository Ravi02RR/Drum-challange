var numberofDrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrumbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this.innerHTML);   to check whether code is working or not
        var buttonInnerHTMl = this.innerHTML;

        makesound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl);
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);

});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;
        case "s":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();

            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;
        case "j":
            var sanre = new Audio("sounds/snare.mp3");
            sanre.play();

            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;
        default:
            console.log(buttonInnerHTMl);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
}
