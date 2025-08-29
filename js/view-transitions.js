if (!document.startViewTransition) return;

function handleNavigation() {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    if (
      link.hostname !== window.location.hostname ||
      link.hash ||
      link.href.startsWith("mailto:") ||
      link.href.startsWith("tel:")
    ) {
      return;
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      document.startViewTransition(() => (window.location.href = href));
    });
  });
}

document.addEventListener("DOMContentLoaded", handleNavigation);

window.addEventListener("popstate", () =>
  document.startViewTransition(() => {})
);
