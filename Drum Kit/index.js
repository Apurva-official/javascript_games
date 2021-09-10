var DrumButLen = document.querySelectorAll(".drum").length;

for (var i = 0; i < DrumButLen; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });

}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            let aud1 = new Audio("sounds/tom-1.mp3");
            aud1.play();
            break;
        case "a":
            let aud2 = new Audio("sounds/tom-2.mp3");
            aud2.play();
            break;
        case "s":
            let aud3 = new Audio("sounds/tom-3.mp3");
            aud3.play();
            break;
        case "d":
            let aud4 = new Audio("sounds/tom-4.mp3");
            aud4.play();
            break;
        case "j":
            let aud5 = new Audio("sounds/crash.mp3");
            aud5.play();
            break;
        case "k":
            let aud6 = new Audio("sounds/kick-bass.mp3");
            aud6.play();
            break;
        case "l":
            let aud7 = new Audio("sounds/snare.mp3");
            aud7.play();
            break;
        default:
            alert('Key Pressed is not a valid drum button!');
    }
}



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}