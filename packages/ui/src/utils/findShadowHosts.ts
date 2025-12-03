export function findShadowHosts() {
  const allElements = document.querySelectorAll("*");
  const shadowHosts: Element[] = [];

  allElements.forEach((el) => {
    if (el.shadowRoot) {
      shadowHosts.push(el);
    }
  });

  return shadowHosts;
}
