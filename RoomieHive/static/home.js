document.addEventListener('DOMContentLoaded', function() {
    // Get login button and login popup
    const loginBtn = document.getElementById('loginBtn');
    const loginPopup = document.getElementById('login-popup');
    const nav=document.getElementById('nav');
        loginPopup.style.display = 'none';
    // Open login popup when login button is clicked
    loginBtn.addEventListener('click', function() {
      loginPopup.style.display = 'block';
    });
    
    // Close login popup when close button is clicked
 
    // Handle form submission (login logic)
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Perform login logic here (e.g., send request to server)
      // After successful login, you can replace "Login" with "Logout" in the navbar
      loginBtn.textContent = 'LOGOUT';
      // Close the login popup
      loginPopup.style.display = 'none';
      
    });
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addTestimonialBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Submit testimonial form
var form = document.getElementById("testimonialForm");
form.onsubmit = function(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var testimonial = document.getElementById("testimonial").value;
  // Add your code to submit the testimonial
  modal.style.display = "none"; 
  addTestimonialToSlider(username, testimonial)// Close the modal after submission
}

    // Array to store testimonials
var testimonials = [
  { name: "John Doe", text: "Testimonial text goes here." },
  { name: "Jane Smith", text: "Another testimonial text." },
  { name: "Michael Johnson", text: "Yet another testimonial text." }
];

// Function to add a testimonial to the slider
function addTestimonialToSlider(name, text) {
  var slider = document.querySelector(".slider");
  var slide = document.createElement("div");
  slide.classList.add("slide");
  slide.innerHTML = `
    <h3>${name}</h3>
    <p>"${text}"</p>
  `;
  slider.appendChild(slide);
}

// Function to change testimonials in the slider
function changeTestimonials() {
  var slider = document.querySelector(".slider");
  var firstSlide = slider.firstElementChild;
  slider.removeChild(firstSlide);
  slider.appendChild(firstSlide);
}

// Add initial testimonials to the slider
testimonials.forEach(function(testimonial) {
  addTestimonialToSlider(testimonial.name, testimonial.text);
});

// Autochange testimonials every 3 seconds
setInterval(changeTestimonials, 3000);

// Submit testimonial form
var form = document.getElementById("testimonialForm");
form.onsubmit = function(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var testimonial = document.getElementById("testimonial").value;
  addTestimonialToSlider(username, testimonial);
  // Clear form fields
  document.getElementById("username").value = "";
  document.getElementById("testimonial").value = "";
  // Close the modal
  modal.style.display = "none";
}
from=document.getElementById("fromlist");
from.style.display="none";
ip=document.getElementById("searchInput");
ip.addEventListener('click',function(){
  from.style.display="block";
})
const searchInput = document.getElementById("searchInput");
  const optionDivs = document.querySelectorAll(".a");

  // Add click event listeners to each option div
  optionDivs.forEach(function(optionDiv) {
    optionDiv.addEventListener("click", function() {
      // Update the input field value with the selected option
      searchInput.value = optionDiv.textContent;
    });
  });
    
  });
  