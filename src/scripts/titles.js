const $headings = document.querySelectorAll("h1, h2");

function easing(x) {
  let clampX = Math.max(0, Math.min(x, 1));
  return Math.sin((x * Math.PI) / 2);
}

function addListenerToHeadings($headings) {
  let allSpans = [];
  $headings.forEach(($heading) => {
    $heading.innerHTML = $heading.innerHTML
      .split("")
      .map((letter) => {
        return `<span data-set="variable">${letter}</span>`;
      })
      .join("");
    const spans = $heading.querySelectorAll("span[data-set=variable]");
    allSpans = allSpans.concat(Array.from(spans));
  });
  document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    allSpans.forEach((span) => {
      const bounds = span.getBoundingClientRect();
      const spanX = bounds.left + bounds.width / 2;
      const spanY = bounds.top + bounds.height / 2;

      const diffX = mouseX - spanX;
      const diffY = mouseY - spanY;

      const distance = Math.sqrt(diffX * diffX + diffY * diffY);

      const normalizedDistance = distance / 200;

      const weight = 300 + 700 * normalizedDistance;

      span.style.fontVariationSettings = `"wght" ${weight}`;
    });
  });
}

export default function initVariableTitles() {
  addListenerToHeadings($headings);
}
