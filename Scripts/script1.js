let isRegister = false;

// Book Now
function bookNow(packageName) {
  localStorage.setItem("selectedPackage", packageName);

  if (localStorage.getItem("loggedInUser")) {
    window.location.href = "Booknow.html";
  } else {
    window.location.href = "auth.html";
  }
}

// Toggle Login/Register
function toggle() {
  isRegister = !isRegister;
  document.getElementById("title").innerText =
    isRegister ? "Create Account" : "Login";
}

// Login or Register
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Fill all fields");
    return;
  }

  if (isRegister) {
    localStorage.setItem(email, password);
    alert("Account Created. Please Login.");
    toggle();
  } else {
    const stored = localStorage.getItem(email);
    if (stored === password) {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "booknow.html";
    } else {
      alert("Invalid credentials");
    }
  }
}

// Booking Page
if (window.location.pathname.includes("booking")) {
  const pkg = localStorage.getItem("selectedPackage");
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "auth.html";
  } else {
    document.getElementById("details").innerText =
      `Package: ${pkg}\nBooked by: ${user}`;
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
