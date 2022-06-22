
//For Button Press
for (var i = 0; i <7; i++) {
  document.querySelectorAll('button')[i].addEventListener('click',function()
  {
    var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML)
  makeAnim(buttonInnerHTML)
  })
}
//For KeyBoard Press
document.addEventListener("keypress",function()
{
  makeSound(event.key)
  makeAnim(event.key)
})
function makeSound(key)
{
switch (key) {

  case "w":
  var audio=new Audio('sounds/crash.mp3');
  audio.play();
  break;

    case "a":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    case "s":
    var aud=new Audio('sounds/snare.mp3');
    aud.play()
    break;

    case "d":
    var au=new Audio('sounds/tom-1.mp3');
    au.play()
    break;

    case "j":
    var a=new Audio('sounds/tom-2.mp3');
    a.play()
    break;

    case "k":
    var audio1=new Audio('sounds/tom-3.mp3');
    audio1.play()
    break;

    case "l":
    var audio2=new Audio('sounds/tom-4.mp3');
    audio2.play()
    break;

  default:

console.log(innerHTML)
}

}
function makeAnim(key)
{
  document.querySelector('.'+key).classList.add('pressed');
  setTimeout(function(){
    document.querySelector('.'+key).classList.remove('pressed')
  },100)
}
