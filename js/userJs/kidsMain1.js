$(document).ready(function () {
  kd();
});
function kd() {
  $.ajax({
    url: "http://localhost:2424/main/kids",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      kidDa(res);
    },
    error: function (err) {
      console.log("error");
    },
  });
}
function kidDa(huff) {
  for (var v = 0; v < huff.length; v++) {
    kda(huff[v]);
  }
}
function kda(qwa) {
  // console.log(ugh);
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${qwa.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", qwa.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".kid-user").append(ulTag);
}
