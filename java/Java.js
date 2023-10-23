var menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.menu1');

        menu.onclick = function(){
            if(navbar.style.display == "none"){
                navbar.style.display = "block";
                menu.src = "images/close.png";
            }
            else{
                navbar.style.display = "none";
                menu.src = "images/menu.png";
            }
        }



        function myFunction() {
          document.getElementById("myProfile").classList.toggle("show");
      }
      

      window.onclick = function(event) {
        if (!event.target.matchesId('fa')) {
      
          var dropdowns = document.getElementsByClassName("profile-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

 var scroll = new SmoothScroll('a[href*="#"]');

 