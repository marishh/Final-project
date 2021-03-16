// JavaScript source code
AOS.init({
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900 // values from 0 to 3000, with step 50ms
});

// $("#burger-menu").on("click", function(){
//     // $("#menu").toggleClass("open-menu");
//     $("header").toggleClass("bgcolorblack");
// 	$(".logo a").toggleClass("changetowhite");
// 	$(".todisappear").toggleClass("disappear-menu");
// 	$(".toappear").toggleClass("appear-menu");
//   })
$(".normal-menu").on("click", function(){
    // $("#menu").toggleClass("open-menu");
    $("header").toggleClass("header-color-change");
	$(".header-menu").toggleClass("display-block");
	$(".header").toggleClass("display-none");
	// $(".toappear").toggleClass("appear-menu");
  })
// $("#exit-menu").on("click", function(){
//     // $("#menu").toggleClass("open-menu");
//     $("header").toggleClass("header-color-change-white");
//     $(".header-menu").toggleClass("display-none");
// 	$(".header").toggleClass("display-flex");
// 	// $(".todisappear").toggleClass("disappear-menu");
// 	// $(".toappear").toggleClass("appear-menu");
//   })
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     // this.classList.toggle("active");
//     var content = document.getElementsByClassName('content');
//     if (content[i].style.display === "block") {
//       content[i].style.display = "none";
//     } else {
//       content[i].style.display = "block";
//     }
//   });
// }
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
      // this.nextElementSibling.toggleClass("column-view");
    }
  });
}