// Custom form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  // Simple validation logic
  if (name === "" || email === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  // Basic email format check
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// Interactive Feature 1: Click Counter
let count = 0;
document.getElementById("clickBtn").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// Interactive Feature 2: Background Color Changer
document.getElementById("bgBtn").addEventListener("click", function() {
  const colors = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#f5f5dc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
