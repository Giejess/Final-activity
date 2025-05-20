document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("/contact", {
    method: "POST",
    body: new URLSearchParams(formData)
  })
    .then((response) => response.text())
    .then((message) => {
      alert(message);
      this.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error sending your message.");
    });
});
