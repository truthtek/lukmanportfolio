document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("navbarToggler");
  const navbarMenu = document.getElementById("navbarMenu");

  document.addEventListener("click", function (event) {
    if (!navbarMenu.contains(event.target) && event.target !== navbarToggler) {
      if (navbarMenu.classList.contains("show")) {
        navbarToggler.click();
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
                 var form = document.getElementById("my-form");
                 
                 async function handleSubmit(event) {
                   event.preventDefault();
                   var status = document.getElementById("my-form-status");
                   var data = new FormData(event.target);
                   fetch(event.target.action, {
                     method: form.method,
                     body: data,
                     headers: {
                         'Accept': 'application/json'
                     }
                   }).then(response => {
                     if (response.ok) {
                       status.innerHTML = "Thanks for your submission!";
                       form.reset();
                       alert("Submitted"); // Display an alert when form is submitted successfully
                     } else {
                       response.json().then(data => {
                         if (Object.hasOwn(data, 'errors')) {
                           status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                         } else {
                           status.innerHTML = "Oops! There was a problem submitting your form"
                         }
                       })
                     }
                   }).catch(error => {
                     status.innerHTML = "Oops! There was a problem submitting your form"
                   });
                 }
         
                 form.addEventListener("submit", handleSubmit);
                })




                $(document).ready(function() {
                  // Function to toggle between "Web Developer" and "Software Developer"
                  function toggleJobTitle() {
                      const jobTitleElement = $("#jobTitle");
                      const skillElement = $("#skill");
              
                      // Check the current job title and toggle it
                      if (skillElement.text() === "Web Developer") {
                          skillElement.text("Software Developer");
                          skillElement.text("Software developer");
                      } else {
                          skillElement.text("Web Developer");
                          jobTitleElement.text("Lukman Adedokun");
                      }
                  }
              
                  // Set an interval to call the toggle function every 2 seconds
                  setInterval(toggleJobTitle, 2000);
              });

              
            
                
                // JavaScript function to toggle between "Web Developer" and "Software Developer"
