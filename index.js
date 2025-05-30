
var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerHtml = this.innerHTML;
    switch (buttoninnerHtml) {

      case "L":

        var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;

      case "A":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "V":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "A":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "N":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "Y":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
        case "A" :
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
          default: console.log(buttoninnerHtml);

    }


  });

}














