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
  });
})();
