$(document).ready(() => {
  sheP();
});
function sheP() {
  $.ajax({
    url: "http://localhost:2424/main/womens",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      sheData(res);
    },
    error: function (err) {
      console.log("error" + err);
    },
  });
}
function sheData(shee) {
  for (var v = 0; v < shee.length; v++) {
    sdata(shee[v]);
  }
}
function sdata(huh) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${huh.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", huh.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".women-product-block").append(ulTag);
}
