window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headers").className = "headers-shown";
  } else {
    document.getElementById("headers").className = "headers-hidden";
  }
}


var animationWrapper = document.querySelector('.animation-wrapper svg')

// We are only adding 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  animationWrapper.classList.add('active')
}

// Add handlers to our buttons
animationWrapper.addEventListener('onscroll', draw, true)

// Play draw animation once
setTimeout(draw, 600)
