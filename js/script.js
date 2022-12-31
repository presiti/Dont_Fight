// 탭
$(document).ready(function(){
  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
  });

});


// 사용법
$(function (){
	$("#upload-tip_btn").click(function (){
  	$(".upload_txt").toggle();
  });
});

$(function (){
	$("#camera-tip_btn").click(function (){
  	$(".camera_txt").toggle();
  });
});


// 웹캠
// Init camera
function camInit(stream) {
  var cameraView = document.getElementById("cameraview");
  cameraView.srcObject = stream;
  cameraView.play();
}

function camInitFailed(error) {
  console.log("get camera permission failed : ", error)
}

// Main init

function mainInit() {
  // Check navigator media device available
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia )
  {
      // Navigator mediaDevices not supported
      alert("Media Device not supported")
      return;
  }

  navigator.mediaDevices.getUserMedia({video:true})
      .then(camInit)
      .catch(camInitFailed);

}