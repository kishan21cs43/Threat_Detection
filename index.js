// show current date
// const curDAte = document.getAnimations('date');

// const getCurrntTime = () => {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var returnDate = (day + "/" + month + "/" + year)

    document.getElementsByClassName("dates")[2].innerHTML = "hi kishan";
    // }
// getCurrntTime();

// set active class dynamically
     document.addEventListener("DOMContentLoaded", function() {
       const currentLocation = location.href;
       const menuItem = document.querySelectorAll("nav ul li a");
       const menuLength = menuItem.length;
       for (let i = 0; i < menuLength; i++) {
         if (menuItem[i].href === currentLocation) {
           menuItem[i].className = "active";
         }
       }
      });
