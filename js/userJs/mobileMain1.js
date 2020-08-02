$(document).ready(function () {
  mobil();
});
function mobil() {
  $.ajax({
    url: "http://localhost:2424/main/mobiles",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      mobDa(res);
    },
    error: function (err) {
      console.log("error");
    },
  });
}
function mobDa(mobb) {
  for (var v = 0; v < mobb.length; v++) {
    mDa(mobb[v]);
  }
}
function mDa(num) {
  // console.log(ugh);
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${num.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", num.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".mob-user").append(ulTag);
}
