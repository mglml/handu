function loginSubmit() {
  const data = {};
  data.name = $("#name").val();
  data.password = $("#pwd").val();
  //req to the router for log validation
  $.ajax({
    url: "http://localhost:2424/users/login",
    data: data,
    method: "POST",
    dataType: "JSON",
    success: function (res) {
      console.log(res);
      if (res.msg == "Valid") {
        console.log(res.msg);
        location.replace("../assets/user1.html");
      } else {
        alert("Login Failed please Check again");
      }
    },
    error: function (err) {
      console.log("You got error man!!!?");
    },
  });
}
function showHidePwd() {
  const currentType = $("#pwd").attr("type");
  if (currentType == "password") {
    $("#pwd").attr("type", "text");
  } else {
    $("#pwd").attr("type", "password");
  }
}
