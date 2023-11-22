//  jQuery Slide start

$(document).ready(function () {
  $(".btn").click(function () {
    $(".slideDown").slideDown();
  });
});

$(document).ready(function () {
  $(".btn-1").click(function () {
    $(".slideDown-1").slideUp(1000);
  });
});

$(document).ready(function () {
  $(".btn-2").click(function () {
    $(".slideDown-2").slideToggle();
  });
});

// jQuery Slide end

//  jQuery Animate start

$(document).ready(function () {
  $(".btn-3").click(function () {
    $(".hello").animate({ left: "250px" });
  });
});

$(document).ready(function () {
  $(".btn-4").click(function () {
    $(".hello-1").animate({
      left: "250px",
      width: "250px",
      hight: "250px",
      opacity: "0.1",
    });
  });
});

$(document).ready(function () {
  $(".btn-5").click(function () {
    $(".hello-2").animate({
      left: "250px",
      width: "250px",
      height: "250px",
    });
  });
});

$(document).ready(function () {
  $(".btn-6").click(function () {
    $(".hello-3").animate({
      height: "toggle",
    });
  });
});

$(document).ready(function () {
  $(".btn-7").click(function () {
    var div = $(".hello-4");
    div.animate({ height: "200px", opacity: "0.4" }, "slow");
    div.animate({ width: "200px", opacity: "0.4" }, "slow");
    div.animate({ height: "100px", opacity: "0.4" }, "slow");
    div.animate({ width: "100px", opacity: "0.4" }, "slow");
  });
});

$(document).ready(function () {
  $(".btn-8").click(function () {
    var div = $(".hello-5");
    div.animate({ left: "200px", opacity: "0.4" }, "slow");
    div.animate({ width: "200px", height: "200px", opacity: "0.4" }, "slow");
    div.animate({ fontSize: "2em", opacity: "0.4" }, "slow");
  });
});
//  jQuery Animate end

// jQuery Stop Animations start

$(document).ready(function () {
  $(".slide-down").click(function () {
    $(".Panel").slideDown(3000);
  });
});
$(".btn-9").click(function () {
  $(".Panel").stop();
});
// jQuery Stop Animations end

// jQuery Callback start

$(document).ready(function () {
  $(".hide").click(function () {
    $(".hide-1").hide("slow", function () {
      alert("The paragraph is now hidden...");
    });
  });
});

$(document).ready(function () {
  $(".hide_1").click(function () {
    $(".hide_1").hide(5000);
    alert("The paragraph is now hidden...?");
  });
});
// jQuery Callback end

// jQuery - Chaining start

$(document).ready(function () {
  $(".color-change").click(function () {
    $(".color").css("color", "red").slideUp(2000).slideDown(2000);
  });
});
// jQuery - Chaining end
