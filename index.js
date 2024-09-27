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