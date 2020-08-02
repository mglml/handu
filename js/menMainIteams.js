function foo() {
  $.ajax({
    url: "http://localhost:2424/main/mens",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      myData(res);
    },
    error: function (err) {
      console.log("error");
    },
  });
}
function myData(hee) {
  for (var v = 0; v < hee.length; v++) {
    pdata(hee[v]);
  }
}
function pdata(ugh) {
  // console.log(ugh);
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${ugh.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", ugh.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".men-product-block").append(ulTag);
}
