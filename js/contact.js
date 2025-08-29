function initEmailToast() {
  const emailElement = document.getElementById("email");
  if (!emailElement) return;

  emailElement.addEventListener("click", async () => {
    const email = emailElement.textContent;
    const toastDiv = document.getElementById("email-toast");

    try {
      await navigator.clipboard.writeText(email);
      toastDiv.classList.add("show");
      setTimeout(() => {
        toastDiv.classList.remove("show");
      }, 3000);
    } catch (err) {
      console.log("Failed to copy Email.", err);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initEmailToast();
});
