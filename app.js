var nabvar = document.getElementsByClassName("navbar")[0]
var pos = document.documentElement.scrollTop;
var up = false;
var newpos;

function nabvarFunction(){
  newpos = document.documentElement.scrollTop;
  if(newpos === 0){
    nabvar.classList.add("top")
  } else {
    nabvar.classList.remove("top")
    nabvar.classList.remove("animation-on-reload")
  }
    
  if (newpos > pos && !up) {
      nabvar.style.top = "-65px";
      up = !up;
  } else if(newpos < pos && up) {
      nabvar.style.top = "0";
      up = !up;
  }
  pos = newpos;
}

if(pos === 0){
  nabvar.classList.add("top")
  nabvar.classList.add("animation-on-reload")
}

window.onscroll = function() {nabvarFunction()};