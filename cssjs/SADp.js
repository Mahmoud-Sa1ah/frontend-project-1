let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
// } else {
//     mybutton.style.display = "none";
// }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari

  
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function loadContent(content) {
  document.getElementById('content').innerHTML = content;
}

// Function to contact the airport
function contactAirport() {
  const contactInfo = `
    <div class="diiiv"><h1 class="poo";>Contact Us</h1>
    <p class="po">For inquiries or assistance, please contact us at:</p>
    <p class="po">Phone: 123-456-7890</p>
    <p class="po">Email: info@airport.com</p>
    </div>
    <style>
    .a{color:blue;}
   .diiiv{
      min-height: 100vh;
      padding-top: 10%;
      padding-bottom: 50%;
    }
   .poo{
padding-bottom: 50px;
    font-weight: 1000;
    font-size: 80px;
    align-items: center;
    text-align: center;
   }   
    
   .po{
    align-items: center;
    text-align: center;

   } 
    
    
    </style>
  `;
  loadContent(contactInfo);
}
 
// Function to display services
  function displayServices() {
    const services = `
      <h2>Services</h2>
      <ul>
        <li>Baggage Claim</li>
        <li>Car Rental</li>
        <li>Restaurants</li>
        <li>Wi-Fi</li>
      </ul>
    `;
    loadContent(services);
 }
// Function to handle navigation
function navigateTo(page) {
  switch (page) {
    case 'services':
      displayServices();
      break;
    case 'contact':
      contactAirport();
      break;
    default:
      alert('Invalid page.');
  }
}

// Initial page load
displayHome();
