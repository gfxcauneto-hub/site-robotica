(() => {
  const checkoutUrl = "https://go.centerpag.com/PPU38CQEMT4";
  const oldCheckoutPattern = /(?:pay\.hotmart\.com|checkout\.escolapequenogenio\.com\.br)/i;

  const updateCheckoutLinks = () => {
    document.querySelectorAll("a[href]").forEach((link) => {
      if (oldCheckoutPattern.test(link.href)) {
        link.href = checkoutUrl;
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateCheckoutLinks();
    new MutationObserver(updateCheckoutLinks).observe(document.body, {
      childList: true,
      subtree: true,
    });

    const deferredVideo = document.querySelector("iframe[data-src]");
    if (deferredVideo) {
      const playButton = document.createElement("button");
      playButton.type = "button";
      playButton.textContent = "▶ Assistir apresentação";
      playButton.setAttribute("aria-label", "Assistir apresentação em vídeo");
      playButton.style.cssText = [
        "position:absolute", "inset:0", "z-index:10", "width:100%", "border:0",
        "border-radius:0.75rem", "background:linear-gradient(135deg, #1e1b4b, #6d28d9)",
        "color:#fff", "font:700 1rem/1.2 Poppins, Arial, sans-serif", "cursor:pointer"
      ].join(";");
      playButton.addEventListener("click", () => {
        deferredVideo.src = deferredVideo.dataset.src;
        playButton.remove();
      }, { once: true });
      deferredVideo.parentElement?.appendChild(playButton);
    }
  });
})();
