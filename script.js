//-- variables
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var i = 0;
var txt = "Are you stuck at home, because of covid?\nNo worries, just enjoy our loading-page, \nwhich.. well.. has nothing to do with the content.. :)";
var speed = 50;


//-- stop/ play video on button click
function stopVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Stop";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//-- focus/blur background on button hover
function blurBg(){ video.classList.add("blurBg"); }
function focusBg(){ video.classList.remove("blurBg"); }



function onLoad() {
  //-- typing effect
    if (i < txt.length) {
      document.getElementById("p_loading_page").innerHTML += txt.charAt(i);
      i++;
      setTimeout(onLoad, speed);
    }

  //-- set video for desktop / mobile
    var videoMP4 = document.getElementById("myVideo").getAttribute("srcdesk");
    if(window.width < 721){
      videoMP4 = document.getElementById("myVideo").getAttribute("scrmob");
    }  
    var source = document.createElement("source");
    source.setAttribute("src", videoMP4);
    source.setAttribute("type", "video/mp4"); 
    video.appendChild(source);
}



//-- navbar

function unrollNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
/*
setInterval(() =>{
    console.log(video.currentTime);
});*/
