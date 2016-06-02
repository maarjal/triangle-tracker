//Business logic
// var triangle = function(side1, side2, side3) {
//   if (side1 + side2 =< side3) {
//     return ""
//   }
// }




// User interface logic

$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());


    if (side1 === side2 && side2 === side3 && side1 === side3) {
      $(".result").text("Equilateral");
      $("#result").show();
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $(".result").text("Isosceles");
      $("#result").show();
    } else if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
      $(".result").text("NOT a triangle");
      $("#result").show();
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      $(".result").text("Scalene");
      $("#result").show();
    }

    event.preventDefault();
  });
});
