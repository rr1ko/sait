$(".one, .two, .three").click(function () {
    alert("Clicked "+$(this).attr("class"));
    // дальше код события
  })