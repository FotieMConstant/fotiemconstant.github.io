var randomPassword = function (length) {
  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var pass = "";
  for (x = 0; x < length; x++) {
    i = Math.floor(Math.random() * 62);
    pass += chars.charAt(i);
  }
  $("#output").text(pass);
};

$("button").on("click", function () {
  var length = 36;
  $("#output").show();
  randomPassword(length);
});
