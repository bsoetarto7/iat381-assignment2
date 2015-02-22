navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);
 
navigator.getUserMedia({
  video: true
}, function (localMediaStream) {
 
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
 
  var button = document.getElementById('Camerabutton');
  button.onclick = function () {
    var canvas = document.createElement('canvas');
    var w = video.videoWidth;
    var h = video.videoHeight;
        canvas.width  = w;
        canvas.height = h;
    var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
    // document.body.appendChild(canvas);

      var imgData = canvas.toDataURL("img/png");
      document.getElementById('cameraIMG').setAttribute( 'src', imgData);
    
  }
 
}, function (err) {
  alert(err);
});