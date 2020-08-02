$(document).ready(() => {
  shee();
});
function shee() {
  $.ajax({
    url: "http://localhost:2424/she/cloths/details",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      sheGot(res);
    },
    error: function (err) {
      console.log("erroe");
    },
  });
}

function sheGot(abc) {
  for (var s = 0; s < abc.length; s++) {
    shePro(abc[s]);
  }
}
function shePro(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var li4 = $("<li></li>").text("Women's Regular fit T-Shirt (Pack of 3)");
  var li5 = $("<li.</li>").text(
    "FREE Delivery over ₹499. Fulfilled by Amazon."
  );
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3, li4, li5);
  $(".womens-wear-block").append(ulTag);
}
