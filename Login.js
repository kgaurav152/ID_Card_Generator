const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  const user = users.find((user) => user.username === username);

  if (!user) {
    alert("Invalid username or password");
    return;
  }

  if (user.password !== password) {
    alert("Invalid username or password");
    return;
  }

  // Save the username in local storage
  localStorage.setItem("username", username);

  // Redirect to the Generator page
  window.location.href = "Generator.html";
});
