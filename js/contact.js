function initEmailToast() {
  const emailElement = document.getElementById("email-item");
  if (!emailElement) return;

  const emailContent = document.getElementById("email");

  emailElement.addEventListener("click", async () => {
    const email = emailContent.textContent;
    const toastDiv = document.querySelector(".email-toast");

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
