const email = "grerad@gmail.com";
const copyEmailButton = document.querySelector("[data-copy-email]");
const printButton = document.querySelector("[data-print]");
const status = document.querySelector("[data-status]");

function setStatus(message) {
  status.textContent = message;
}

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    setStatus("Email copied to clipboard.");
  } catch {
    setStatus(`Copy unavailable. Email: ${email}`);
  }
});

printButton.addEventListener("click", () => {
  window.print();
});