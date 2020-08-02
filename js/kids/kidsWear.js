$(document).ready(() => {
  child();
});
function child() {
  $.ajax({
    url: "http://localhost:2424/child/cloths/details",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      kid(res);
    },
    error: function (err) {
      console.log("error");
    },
  });
}

function kid(huff) {
  for (let i = 0; i < huff.length; i++) {
    proChild(huff[i]);
  }
}
function proChild(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var li4 = $("<li></li>").text("kid's Regular fit T-Shirt (Pack of 3)");
  var li5 = $("<li.</li>").text(
    "FREE Delivery over ₹499. Fulfilled by Amazon."
  );
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3, li4, li5);
  $(".kids-wear-block").append(ulTag);
}
