// JavaScript source code
AOS.init({
    offset: 10, // offset (in px) from the original trigger point
    delay: 350, // values from 0 to 3000, with step 50ms
    duration: 1300 // values from 0 to 3000, with step 50ms
});


$(".normal-menu").on("click", function(){
    // $("#menu").toggleClass("open-menu");
    $("header").toggleClass("header-color-change");
	$(".header-menu").toggleClass("display-block");
	$(".header").toggleClass("display-none");
  })

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "flex") {
      content.style.display = "none";
      this.getElementsByClassName("change-button-state")[0].classList.remove("fa-chevron-up");
      this.getElementsByClassName("change-button-state")[0].classList.toggle("fa-chevron-down");
    } else {
      this.getElementsByClassName("change-button-state")[0].classList.remove("fa-chevron-down");
      this.getElementsByClassName("change-button-state")[0].classList.toggle("fa-chevron-up");
      content.style.display = "flex";
      // this.nextElementSibling.toggleClass("column-view");
    }
  });
}
var coll3 = document.getElementsByClassName("collapsible-3");
var z;

for (z = 0; z < coll3.length; z++) {
  coll3[z].addEventListener("click", function() {
    this.classList.toggle("active");
    var content3 = this.nextElementSibling;
    if (content3.style.display == "flex") {
      content3.style.display = "none";
      this.getElementsByClassName("change-button-state")[0].classList.remove("fa-chevron-up");
      this.getElementsByClassName("change-button-state")[0].classList.toggle("fa-chevron-down");
      this.getElementsByClassName("paragraph-to-disappear")[0].style.display = "block";
    } else {
      content3.style.display = "flex";
      this.getElementsByClassName("change-button-state")[0].classList.remove("fa-chevron-down");
      this.getElementsByClassName("change-button-state")[0].classList.toggle("fa-chevron-up");
      this.getElementsByClassName("paragraph-to-disappear")[0].style.display = "none";
      // this.nextElementSibling.toggleClass("column-view");
    }
  });
}
// read more button??
var coll2 = document.getElementsByClassName("read-more-button");
var j;

for (j = 0; j < coll2.length; j++) {
  coll2[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    content2.style.display = "block";
    this.classList.toggle("display-none");
      // this.nextElementSibling.toggleClass("column-view");
  });
}


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = '50px';
//   }
//   prevScrollpos = currentScrollPos;
// }
// -$("#navbar").height()


// slick
$(function(){
   $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 527,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});

// Explore Button
// MUSHAOBSSSSSSSSSSSSS
function changelink(){
	// if(document.readyState === 'loaded') {
	  // document.getElementById("rms").addEventListener("mouseover", function() {
		var cna=document.getElementsByClassName("slick-center")[0];
		var cname=cna.firstElementChild.className;
		// document.getElementById("demo").innerHTML = cname; 
		if (cname==="slider-1"){
			window.location.href="magnetism.html";
		} else if (cname==="slider-5"){
			window.location.href="optics.html";
		} else {
			window.location.href="comingsoon.html";
		}
}


