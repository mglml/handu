$(document).ready(() => {
  male();
});
function male() {
  $.ajax({
    url: "http://localhost:2424/he/cloths/details",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      heGotData(res);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function heGotData(huff) {
  for (let i = 0; i < huff.length; i++) {
    proMale(huff[i]);
  }
}

function proMale(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  var li4 = $("<li></li>").text("Men's Regular fit T-Shirt (Pack of 3)");
  var li5 = $("<li.</li>").text(
    "FREE Delivery over ₹499. Fulfilled by Amazon."
  );
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3, li4, li5);
  $(".mens-wear-block").append(ulTag);
}
