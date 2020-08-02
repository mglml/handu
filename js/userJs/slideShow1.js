$(document).ready(() => {
  indi();
});

function indi() {
  $.ajax({
    url: "http://localhost:2424/slide/img/pro",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      indicator(res);
    },
    error: function (err) {
      console.log("error");
    },
  });
}
function indicator(myImg) {
  for (let i = 0; i < myImg.length; i++) {
    addImageToSlides(myImg[i], i);
  }
}
function addImageToSlides(imgUrl, index) {
  var liTag = $("<li></li>");
  liTag.attr("data-target", "#carouselExampleIndicators");
  liTag.attr("data-slide-to", index);
  if (index == 0) {
    liTag.attr("class", "active");
  }
  $(".carousel-indicators").append(liTag);
  var divTag = $("<div></div>").attr("class", "carousel-item");
  divTag.attr("data-interval", "2000");
  if (index == 0) {
    divTag.attr("class", "carousel-item active");
  }

  var imgTag = $("<img>").attr("src", imgUrl.img);
  imgTag.attr("class", "d-block w-100");
  divTag.append(imgTag);
  $(".carousel-inner").append(divTag);
}
