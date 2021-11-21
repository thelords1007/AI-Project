// Getting the video and button attribute using the getElementById
const video = document.getElementById("video"),
      button = document.getElementById("button");

// Calling this async function when a click is done on activate PIP.
button.addEventListener("click", async () => {
  button.disabled = true;

  try {
    if (document.pictureInPictureElement === video) {
      await document.exitPictureInPicture();
      button.innerText = "Activate PIP";
    } else {
      await video.requestPictureInPicture();
      button.innerText = "Deactivate PIP";
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    button.disabled = false;
  }
});

// function(event) is called when we enter picture in picture mode which handles the facility of running the video
video.addEventListener("enterpictureinpicture", function(event) { 
  console.log(event);
 });

// function(event) is called when we leave picture in picture mode which handles the facility of running the video
 video.addEventListener("leavepictureinpicture", function(event) {
   console.log(event);
 });

 var onPlayerReady = function(event) {
  event.target.playVideo();  
};

// The first argument of YT.Player is an HTML element ID. 
// YouTube API will replace my <div id="player"> tag 
// with an iframe containing the youtube video.

var player = new YT.Player('player', {
  height: 320,
  width: 400,
  videoId : '6Dc1C77nra4',
  events : {
      'onReady' : onPlayerReady
  }
});
