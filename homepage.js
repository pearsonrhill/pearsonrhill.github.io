


//      !!NAV BAR!!
//      !!NAV BAR!!
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyy()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyy() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {

  navbar.style.display = "none"
  sideNav = document.getElementById("mySidenav");
  sideNav.style.display = "block"
}

function closeNav() {

  side = document.getElementById("mySidenav");
  side.style.display = "none";
  navbar.style.display = "block"
  
}




function dropDownn(){
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}
dropDownn();
    

// PFP loop
function RamdomPhotos(){
    photos = ['rickInCar.png', "coleBoon.png", 'familyyBoonn.png', "mortyEyes.png", "boonBreaking.png", "coolRick.png" ,];
    var x = 0;
       
        (function() {
          var rotator = document.getElementById('pfp'); //get the element
            var dir = ""
          var delayInSeconds = 3;                           //delay in seconds
             var num = 0;                                      //start number
             var len = photos.length;                             //limit
            setInterval(function(){                           //interval changer
              num = (num === len) ? 0 : num;                //reset if limit reached
              rotator.src = dir + photos[num];                     //change picture
              num++;                                        //increment counter
          }, delayInSeconds * 1000);
          }());
  
}
RamdomPhotos();



//Text Extras
//Text Extras

// When the user clicks on div, open the popup
function schoolPopup() {
  var popup = document.getElementById("schoolPopup");
  popup.classList.toggle("show");
}

function popup() {
  var popup = document.getElementById("smiliepopup");
  popup.classList.toggle("show");
}



AOS.init();
