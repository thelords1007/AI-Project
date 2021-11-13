const video = document.getElementById("video"),
      button = document.getElementById("button");

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

video.addEventListener("enterpictureinpicture", function(event) { 
  console.log(event);
 });

 video.addEventListener("leavepictureinpicture", function(event) {
   console.log(event);
 });