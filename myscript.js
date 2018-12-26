$(document).ready(function(){
  $("#head-uki").click(function(){
    $("#body-uki").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#hide").click(function(){
    $("ul").hide();
  });
  $("#show").click(function(){
    $("ul").show();
  });
});

$(document).ready(function(){
  $("#hide-details").click(function(){
    $("#prog").hide();
  });
});

$(document).ready(function(){
  $("#tech").mouseenter(function(){
    alert("The Page Says You entered to Uki!");
  });
});


$(document).ready(function(){
  $("h2").mouseenter(function(){
    $("h2").css("background-color", "lightblue");
  });
  $("h2").mouseleave(function(){
    $("h2").css("background-color", "gray");
  });
});
