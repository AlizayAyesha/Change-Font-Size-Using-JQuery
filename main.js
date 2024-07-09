$(document).ready(function () {
    $("#range-slider").on("input change", function () {
      $(".text").css("font-size", $(this).val() + "px");
      //change span value
      $(".value").text($(this).val() + "px");
    });
  });
  