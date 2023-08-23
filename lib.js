//library for JS I like


// add like to the closest class corresponding
function addLike(element) {

    var likeBox = element.closest(".like-box");
    var likeCount = likeBox.querySelector(".like-count");
    var currentLikes = parseInt(likeCount.textContent, 10);
    likeCount.textContent = (currentLikes + 1) + " like(s)";

}

// find an element and hide it. CSS class style!
function removeNotification() {
    //returns collection of elements containing the class
    var notification = document.getElementsByClassName('cookie-container');

    //sets the CSS display property to none on the first element in the collection
    notification[0].style.display = 'none';
}

//simple alert
function changeCity() {
    alert("Loading weather report");
}