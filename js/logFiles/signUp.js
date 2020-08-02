function submitUserData() {
  const data = {};
  data.name = $("#name").val();
  data.password = $("#cpwd").val();
  data.email = $("#email").val();
  console.log(data);

  $.ajax({
    url: "http://localhost:2424/users",
    data: data,
    method: "POST",
    dataType: "JSON",
    success: function (res) {
      location.replace("../assets/user1.html");
    },
    error: function (err) {
      console.log("Got error " + err);
    },
  });
}
//  password show n hide functionality
function showHidePwd() {
  const currentType = $(".pwd").attr("type");
  if (currentType == "password") {
    $(".pwd").attr("type", "text");
  } else {
    $(".pwd").attr("type", "password");
  }
}
