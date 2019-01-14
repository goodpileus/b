//------ about
var about = document.getElementById('about-wrap');
var nameText = document.getElementById('nameText');
var footer = document.getElementById('footer');
var updated = document.querySelector('.updated');
// var name = document.getElementById('name');

// Get the button that opens the modal
var btn = document.querySelector('#name');

nameText.innerHTML = "&#9880;";

// Get the <span> element that closes the modal
// var close = document.getElementsByClassName("about-close")[0];

// When the user clicks on the button, open the modal

function toggleAbout() {
    about.classList.toggle('open');
    updated.classList.toggle('updatedShow');
    footer.classList.toggle('bgChange');
    document.body.classList.toggle('noscroll');
    if (nameText.innerHTML == "⚘") {
      nameText.innerHTML = "&#10005;";
      nameText.style = "font-size:2rem;"
    } else {
      nameText.innerHTML = "&#9880;";
      nameText.style = "font-size:2rem;"
    }
    // alert('hey');
}

//Add click listener to menu element
btn.addEventListener('click', toggleAbout);

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == about) {
//         toggleAbout();
//     }
// }
