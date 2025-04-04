// Modal functionality
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const tryEditorBtn = document.getElementById("try-editor-btn");
const createAccountBtn = document.getElementById("create-account-btn");
const ctaSignupBtn = document.getElementById("cta-signup-btn");
const ctaTryBtn = document.getElementById("cta-try-btn");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");
const closeModals = document.querySelectorAll(".close-modal");

// Open modals
loginBtn.addEventListener("click", () => (loginModal.style.display = "flex"));
signupBtn.addEventListener("click", () => (signupModal.style.display = "flex"));
createAccountBtn.addEventListener(
  "click",
  () => (signupModal.style.display = "flex")
);
ctaSignupBtn.addEventListener(
  "click",
  () => (signupModal.style.display = "flex")
);
switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  signupModal.style.display = "flex";
});

// Switch between login/signup
switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "none";
  loginModal.style.display = "flex";
});

// Close modals
closeModals.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  });
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === signupModal) signupModal.style.display = "none";
});

// Redirect to editor
tryEditorBtn.addEventListener("click", () => {
  window.location.href = "editor.html";
});
ctaTryBtn.addEventListener("click", () => {
  window.location.href = "editor.html";
});

// Form submission (simplified for demo)
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login functionality would be implemented here");
  loginModal.style.display = "none";
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Account created! Redirecting to editor...");
  signupModal.style.display = "none";
  window.location.href = "editor.html";
});
