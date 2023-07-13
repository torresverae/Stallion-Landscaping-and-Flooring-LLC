document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle("show");
      });
    });
  
    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function(e) {
      if (!e.target.matches(".dropdown-toggle")) {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function(menu) {
          if (menu.classList.contains("show")) {
            menu.classList.remove("show");
          }
        });
      }
    });
  });

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
  
    // Get form data
    var form = event.target;
    var formData = new FormData(form);
  
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Form submission success
          form.reset();
          alert("Message sent successfully!");
        } else {
          // Form submission error
          alert("Oops! Something went wrong.");
        }
      }
    };
    xhr.send(formData);
  });